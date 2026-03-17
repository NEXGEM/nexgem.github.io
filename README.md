
# NEXGEM's Website

Visit **[nexgem.github.io](https://nexgem.github.io)** 🚀

_Built with [Lab Website Template](https://greene-lab.gitbook.io/lab-website-template-docs)_

## Blog Automation

The Blog landing page now renders image-first cards from `_posts`, and the repository includes a Google Drive sync workflow.

### Google Drive -> Blog sync

1. Put blog photos in a shared Google Drive folder.
2. Make the folder contents accessible for link sharing.
3. Enable the Google Drive API for the Google Cloud project that owns your API key.
4. In GitHub repository settings, add these secrets:
   - `GOOGLE_DRIVE_API_KEY`
   - `GOOGLE_DRIVE_FOLDER_ID`
5. Optionally add these repository variables:
   - `BLOG_SYNC_AUTHOR`
   - `BLOG_SYNC_CATEGORY`
   - `BLOG_SYNC_TAGS`
   - `BLOG_SYNC_TITLE_PREFIX`
   - `BLOG_SYNC_POST_PREFIX`
6. Run the `Sync Google Drive Blog` workflow manually once, or wait for the scheduled sync.

You can also add metadata in each Google Drive file description:

```text
Title: AACR 2026 Poster Session
Category: conference
Tags: aacr, poster, chicago
Summary: Highlights from our poster session and team meetup.

Full caption or story goes here.
```

For local testing:

```bash
GOOGLE_DRIVE_API_KEY=... \
GOOGLE_DRIVE_FOLDER_ID=... \
node tools/sync-google-drive-blog.mjs
```
