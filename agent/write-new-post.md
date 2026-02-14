# Instruction: Write a New Blog Post

Follow these steps whenever you need to add a new post to the terminal site.

1. **Create the Markdown file**
   - Location: `app/blog/posts/<slug>.md`
   - Include front matter fields:
     ```
     ---
     title: <Title Case>
     date: YYYY-MM-DD
     summary: <1–2 sentence teaser>
     ---
     ```
   - Body content should be markdown (paragraphs, lists). Use `*italic*` for emphasis—no HTML.

2. **Keep the tone**
   - First-person reflections rooted in engineering leadership at Auto Trader UK.
   - Highlight calm leadership, coaching, resilient delivery, or marketplace-scale lessons.
   - 2–4 short sections (≈200–400 words total).

3. **Cross-check**
   - Ensure the filename slug matches the front matter title (lowercase, hyphenated).
   - Run `npm run dev` to verify the new post appears under `ls blog` and renders at `/blog/<slug>`.

4. **Accessibility**
   - Use plain text links when referencing external resources; avoid inline raw URLs where possible.

5. **Commit guidance**
   - Commit message convention: `chore(blog): add <slug> post`.
