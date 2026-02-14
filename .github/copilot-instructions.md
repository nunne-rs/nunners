# Copilot Instructions

These notes capture the current shape of Paul Nunnerley’s personal site so future assistance stays aligned with the established direction.

## Persona
- Paul Nunnerley, UK-based engineering leader currently at Auto Trader UK.
- Focuses on calm leadership, strategic clarity, coaching, and resilient delivery practices.

## Visual Identity
- Core experience mimics a terminal UI (terminal.css plus custom styles).
- Background stays dark, monochrome/teal palette, monospace typography, and animated cursor.
- Prefer minimal embellishments: commands with outputs, faux directory navigation, and subtle cards.

## Content Sources
- Blog posts: markdown files under `app/blog/posts/*.md` with front matter (title, date, summary, content). List on `ls blog` and detail routes at `/blog/:slug`.
- Experience entries: markdown under `app/experience/posts/*.md` with role/company/period/summary/content, surfaced via `ls experience` and `/experience/:slug`.
- Focus areas & leadership principles live in markdown (`app/content/focus.md`, `app/content/principles.md`) parsed through `app/content/lists.ts`.
- Contact links and stats are defined in `app/routes/home.tsx` but ideally remain configurable.

## UI Behaviour
- Home route (`app/routes/home.tsx`) renders a command log (whoami, uptime, cat focus.txt, cat principles.txt, open links, ls blog, ls experience).
- Each command block shows prompt (`paul@autotrader`) followed by structured output (lists, cards, links).
- Detail pages simulate `cat` commands printing markdown content with navigation back home.

## Assets & Accessibility
- Paul’s portrait stored at `public/images/paul.jpg`; used as part of the `whoami` output with descriptive `alt` text.
- When adding assets, keep them in `public/` and ensure optimized sizing plus `loading="lazy"` where appropriate.

## Development Preferences
- Keep new content in markdown whenever possible so non-technical editing is easy.
- Maintain the terminal narrative (commands + outputs) for any additional sections (e.g., `ls talks`, `cat values.txt`).
- Use React Router loaders to fetch markdown-derived data and pass minimal metadata to the UI (avoid duplicating content in TS).
