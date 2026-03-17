#!/usr/bin/env node

import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const rootDir = process.cwd();
const postsDir = path.join(rootDir, "_posts");

const required = ["GOOGLE_DRIVE_API_KEY", "GOOGLE_DRIVE_FOLDER_ID"];
const missing = required.filter((key) => !process.env[key]);

if (missing.length) {
  console.error(`Missing required environment variables: ${missing.join(", ")}`);
  process.exit(1);
}

const config = {
  apiKey: process.env.GOOGLE_DRIVE_API_KEY,
  folderId: process.env.GOOGLE_DRIVE_FOLDER_ID,
  author: process.env.BLOG_SYNC_AUTHOR || "nexgem-drive",
  category: process.env.BLOG_SYNC_CATEGORY || "lab-life",
  tags: (process.env.BLOG_SYNC_TAGS || "lab, photos")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean),
  titlePrefix: process.env.BLOG_SYNC_TITLE_PREFIX || "",
  postPrefix: process.env.BLOG_SYNC_POST_PREFIX || "drive",
};

const requestFields = [
  "nextPageToken",
  "files(id,name,mimeType,createdTime,modifiedTime,description,webViewLink,thumbnailLink,imageMediaMetadata(width,height))",
].join(",");

const supportedMimeTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "image/gif",
]);

const toTitle = (name) =>
  name
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const yamlQuote = (value) => `"${String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;

const imageUrlFor = (fileId) =>
  `https://lh3.googleusercontent.com/d/${fileId}=w2200`;

const unique = (values) => [...new Set(values.filter(Boolean))];

const normalizeDate = (value) => {
  const candidate = String(value || "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(candidate)) {
    return "";
  }

  const parsed = new Date(`${candidate}T00:00:00Z`);
  return Number.isNaN(parsed.getTime()) ? "" : candidate;
};

const parseDescriptionMetadata = (input) => {
  const lines = String(input || "").split(/\r?\n/);
  const metadata = {
    title: "",
    date: "",
    summary: "",
    category: "",
    tags: [],
  };
  const body = [];

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      body.push("");
      continue;
    }

    const titleMatch = line.match(/^title:\s*(.+)$/i);
    if (titleMatch) {
      metadata.title = titleMatch[1].trim();
      continue;
    }

    const dateMatch = line.match(/^date:\s*(.+)$/i);
    if (dateMatch) {
      metadata.date = normalizeDate(dateMatch[1]);
      continue;
    }

    const summaryMatch = line.match(/^summary:\s*(.+)$/i);
    if (summaryMatch) {
      metadata.summary = summaryMatch[1].trim();
      continue;
    }

    const categoryMatch = line.match(/^category:\s*(.+)$/i);
    if (categoryMatch) {
      metadata.category = slugify(categoryMatch[1]);
      continue;
    }

    const tagsMatch = line.match(/^tags:\s*(.+)$/i);
    if (tagsMatch) {
      metadata.tags = tagsMatch[1]
        .split(",")
        .map((value) => slugify(value))
        .filter(Boolean);
      continue;
    }

    body.push(rawLine);
  }

  const normalizedBody = body.join("\n").trim();
  return {
    ...metadata,
    body: normalizedBody,
  };
};

const listDriveImages = async () => {
  const files = [];
  let pageToken = "";

  while (true) {
    const params = new URLSearchParams({
      q: `'${config.folderId}' in parents and trashed = false`,
      fields: requestFields,
      orderBy: "createdTime desc",
      pageSize: "1000",
      supportsAllDrives: "true",
      includeItemsFromAllDrives: "true",
      key: config.apiKey,
    });

    if (pageToken) {
      params.set("pageToken", pageToken);
    }

    const url = `https://www.googleapis.com/drive/v3/files?${params.toString()}`;
    const response = await fetch(url);

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Drive API request failed (${response.status}): ${body}`);
    }

    const payload = await response.json();
    files.push(...(payload.files || []));

    if (!payload.nextPageToken) {
      return files.filter((file) => supportedMimeTypes.has(file.mimeType));
    }

    pageToken = payload.nextPageToken;
  }
};

const loadExistingGeneratedPosts = async () => {
  await mkdir(postsDir, { recursive: true });
  const filenames = await readdir(postsDir);
  const generated = new Map();

  for (const filename of filenames) {
    if (!filename.endsWith(".md")) {
      continue;
    }

    const filePath = path.join(postsDir, filename);
    const body = await readFile(filePath, "utf8");
    const match = body.match(/^drive_file_id:\s*([^\n]+)$/m);

    if (match) {
      generated.set(match[1].trim(), { filename, filePath });
    }
  }

  return generated;
};

const renderPost = (file) => {
  const createdAt = new Date(file.createdTime || file.modifiedTime || Date.now());
  const descriptionMeta = parseDescriptionMetadata(file.description);
  const isoDate = descriptionMeta.date || createdAt.toISOString().slice(0, 10);
  const derivedTitle = descriptionMeta.title || toTitle(file.name);
  const safeTitle = `${config.titlePrefix}${derivedTitle}`.trim();
  const title = safeTitle || "Lab Photo";
  const bodyCopy = descriptionMeta.body || "";
  const summary = descriptionMeta.summary || bodyCopy.split(/\n{2,}/)[0].trim();
  const category = descriptionMeta.category || config.category;
  const tags = unique([
    category,
    ...config.tags.map((value) => slugify(value)),
    ...descriptionMeta.tags,
  ]);
  const filename = `${isoDate}-${config.postPrefix}-${slugify(file.name || file.id || title)}-${file.id}.md`;

  const frontMatter = [
    "---",
    `title: ${yamlQuote(title)}`,
    `author: ${yamlQuote(config.author)}`,
    `date: ${isoDate}`,
    `category: ${yamlQuote(category)}`,
    `tags: [${tags.map(yamlQuote).join(", ")}]`,
    `image: ${yamlQuote(imageUrlFor(file.id))}`,
    "source: google-drive",
    `drive_file_id: ${file.id}`,
    `drive_web_view_link: ${yamlQuote(file.webViewLink || "")}`,
    `drive_thumbnail_link: ${yamlQuote(file.thumbnailLink || "")}`,
    `description: ${yamlQuote(summary)}`,
    "---",
  ].join("\n");

  const content = [
    frontMatter,
    "",
    `![${title}](${imageUrlFor(file.id)})`,
    ...(summary
      ? ["", "<!-- excerpt start -->", summary, "<!-- excerpt end -->"]
      : []),
    ...(bodyCopy ? ["", bodyCopy] : []),
  ]
    .filter(Boolean)
    .join("\n");

  return { filename, content, fileId: file.id };
};

const sync = async () => {
  const driveFiles = await listDriveImages();
  const existing = await loadExistingGeneratedPosts();
  const seen = new Set();

  for (const file of driveFiles) {
    const rendered = renderPost(file);
    const previous = existing.get(rendered.fileId);
    const filename = previous?.filename || rendered.filename;
    const filePath = path.join(postsDir, filename);

    await writeFile(filePath, rendered.content, "utf8");
    seen.add(rendered.fileId);
    console.log(`Synced ${filename}`);
  }

  for (const [fileId, entry] of existing.entries()) {
    if (seen.has(fileId)) {
      continue;
    }

    await rm(entry.filePath);
    console.log(`Removed ${entry.filename}`);
  }

  console.log(`Processed ${seen.size} Google Drive image posts.`);
};

sync().catch((error) => {
  console.error(error);
  process.exit(1);
});
