# The ABADA AI Briefing (blog.abada.ai)

The blog of abada.ai, published free with GitHub Pages. This page is a quick reference. The full setup guide is in the ABADA project ("Publishing the ABADA blog on GitHub").

## Write a new post

1. Open the `_templates` folder and pick a template:
   - `article.md` for any topic
   - `roundup.md` for the monthly "Latest in AI" roundup
2. Click **Copy raw file** (the copy icon above the text).
3. Open the `_posts` folder, then **Add file > Create new file**.
4. Name the file `YYYY-MM-DD-short-title.md`, for example `2026-11-03-is-this-process-ready.md`. Use lowercase letters and hyphens, no spaces. Use today's date or an earlier one: posts with future dates are skipped.
5. Paste the template, replace the text inside the quotes (keep the quotes), and write the post below the second `---` line.
6. Click **Commit changes**. The post is live in about 2 minutes.
7. To check it worked, open the **Actions** tab: a green tick means published; a red X means something needs fixing (usually a missing quote mark).

## Formatting cheat sheet

| You type | You get |
|---|---|
| `## Section heading` | A section heading |
| `### Smaller heading` | A smaller heading |
| `**bold**` | **bold** |
| `[link text](https://example.com)` | a link |
| `> A line worth quoting` | a large pull quote |
| `- item` | a bulleted list |
| `1. step` | a numbered list with round numbers |
| `![Description](/assets/images/posts/picture.png)` | a picture |
| `{: .callout}` on the line right after a paragraph | that paragraph in a highlighted box |

Tables use `|` between columns. Copy the example table in `_templates/article.md`.

## Topics

Each topic is one small file in the `_topics` folder. The menu, topic pages and home page update by themselves.

- **Rename a topic:** open its file, change `title:`, commit. Its web address stays the same.
- **Add a topic:** copy an existing topic file into a new file in `_topics`. The new file's name becomes the web address (lowercase, hyphens, ending in `.md`). Change `title`, `description` and `order`.
- **Reorder topics:** change the `order:` numbers (1 shows first).
- **Remove a topic:** first change `topic:` on any posts that use it, then delete the topic's file.
- **Put a post in a topic:** set `topic:` in the post to the topic's file name without `.md`, for example `topic: agentic-ai`.

## Settings

`_config.yml` holds the blog name, description (used by search engines and LinkedIn), the three `intro:` lines under the home page title, author details, LinkedIn link, contact email, `contact_url` (the abada.ai contact form that every "Suggest a topic", "Talk to us" and footer email link opens) and two pre-launch switches:

- `coming_soon: true` shows a "coming soon" page at blog.abada.ai, and the full blog home is at blog.abada.ai/preview-blog.html (unlisted, not private). Posts and topic pages work as usual.
- `preview_mode: true` asks search engines not to list any page.

On launch day set both to `false`. The full blog home then appears at blog.abada.ai.

## Pictures

Upload pictures to `assets/images/posts`. To give a post its own LinkedIn/X preview picture (1200 x 630), add `image: /assets/images/posts/your-picture.png` to the post's front matter. Otherwise the default picture is used.
