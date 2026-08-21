# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Thomas Junghans's personal website and blog (thomasjunghans.ch, hosted on GitHub Pages as tjunghans.github.io). A Jekyll static site with Tailwind CSS for styling. Content is almost entirely Markdown posts and a handful of static pages — there is no application code.

## Commands

Ruby (via `.nvmrc`-pinned Node lts/* and the Gemfile's `jekyll` gem) and Node are both required.

- `npm install` — installs deps and runs `postinstall`, which builds `css/style.css` from `assets/css/style.css` via Tailwind.
- `npm start` — runs `jekyll serve` (serves at http://localhost:4000).
- `npm run watch:css` — rebuilds Tailwind CSS on change; run alongside `npm start` when editing styles.
- `npm run build:css` — one-off Tailwind build (`assets/css/style.css` → `css/style.css`).
- `npm run lh` — runs Lighthouse against the local dev server (must already be running via `npm start`).

There is no test suite (`npm test` is a stub) and no linter configured.

## Architecture

Standard Jekyll layout/include/data separation:

- `_layouts/default.html` — base HTML shell (head, header, footer) wrapping every page.
- `_layouts/post.html` — wraps `default`, adds the "last post update" line above post content. All files in `_posts/` use this layout implicitly via `_config.yml` defaults (see below).
- `_includes/` — small reusable partials: `head.html` (`{% seo %}`/`{% feed_meta %}` tags plus a custom JSON-LD `Person` schema, stylesheet link), `header.html` (site name + page title), `link.html` (styled anchor helper used throughout content via `{% include link.html href="..." text="..." %}`).
- `_data/site.yml` — site-wide values (`name`, `host`, `email`) referenced as `site.data.site.*` in templates and content (separate from the `_config.yml` `title`/`description`/`url` used by `jekyll-seo-tag`).
- `_config.yml` — top-level `title`/`description`/`url`/`plugins` feed `jekyll-seo-tag`/`jekyll-sitemap`/`jekyll-feed`; `defaults` sets every page's `image` and `description` front matter (used as the `jekyll-seo-tag` per-page fallback for OG/Twitter tags — override in a page's own front matter to customize), everything under `assets/img` gets `image: true`, every page defaults to `layout: default`, and everything in `_posts` (type `posts`) defaults to `layout: post`.
- Plugins (`jekyll-seo-tag`, `jekyll-sitemap`, `jekyll-feed`) are Gemfile deps under `group :jekyll_plugins` — all on GitHub Pages' supported plugin list, so the default Pages build handles them without a custom Actions workflow. They generate per-page meta/OG/Twitter tags + JSON-LD, `sitemap.xml`, and `feed.xml` respectively.
- `404.html` — custom not-found page (`permalink: /404.html`, `sitemap: false`) styled via the `default` layout.

Content:
- `_posts/YYYY-MM-DD-title.md` — blog posts, standard Jekyll naming/front matter (`title`, `tags`, `category`).
- `_drafts/` — unpublished posts (no date prefix required); not built by default `jekyll serve`, use `jekyll serve --drafts` to preview them.
- Standalone top-level sections (`core-values/`, `favourite-quotes/`, `now/`, `reading/`) — each is a directory with a single `index.md`, giving it a clean URL (e.g. `/now/`).
- `index.md` — homepage; iterates `site.posts` to list all posts.

Styling:
- `assets/css/style.css` is the Tailwind source (`@tailwind` directives); `css/style.css` is the generated, committed output that `head.html` actually links to. Always edit `assets/css/style.css`, never `css/style.css` directly, and rebuild before committing.
- `tailwind.config.js` defines the custom color palette (`primary` green, `secondary` magenta) and font sizes used across templates/content.

## Notes

- `CNAME` and `robots.txt`/`site.webmanifest`/favicons are deployment/SEO artifacts for GitHub Pages — leave as-is unless the task specifically concerns them.
- `_site/` and `.jekyll-cache/` are Jekyll build output, not source.
