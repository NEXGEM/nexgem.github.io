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
  const isoDate = createdAt.toISOString().slice(0, 10);
  const safeTitle = `${config.titlePrefix}${toTitle(file.name)}`.trim();
  const title = safeTitle || "Lab Photo";
  const description = (file.description || "").trim();
  const summary = description || `${title} captured in the NEXGEM photo archive.`;
  const bodyCopy = description || summary;
  const tags = [...new Set(config.tags)];
  const filename = `${isoDate}-${config.postPrefix}-${slugify(file.name || file.id || title)}-${file.id}.md`;

  const frontMatter = [
    "---",
    `title: ${yamlQuote(title)}`,
    `author: ${yamlQuote(config.author)}`,
    `date: ${isoDate}`,
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
    "<!-- excerpt start -->",
    bodyCopy,
    "<!-- excerpt end -->",
    "",
    `![${title}](${imageUrlFor(file.id)})`,
    "",
    bodyCopy,
    "",
    file.webViewLink ? `[Open in Google Drive](${file.webViewLink})` : "",
    "",
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
