# Palcchi — Digital Playground

A visual, Pinterest-inspired portfolio built with plain HTML, CSS, and JavaScript.

## Features

- Responsive masonry project gallery, category filters, and live search
- Project cards with cover images, descriptions, tags, featured badge, and outbound links
- Admin drawer to add, edit, and delete project cards
- Profile/contact editor
- JSON export/import for portfolio backups
- Responsive layouts and reduced-motion support

## Run locally

Open `index.html` in a browser, or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Admin prototype

Click **Admin** in the top navigation. The starter PIN is `change-this-pin`; change `ADMIN_PIN` near the top of `script.js` before using the prototype.

**Important:** This version stores edits in the current browser's `localStorage`. It does not sync changes to GitHub or to other visitors' browsers. The PIN is client-side and can be found in the source code, so this is a UI/content-management prototype, not secure authentication. Export a JSON backup before clearing browser data. For a real private admin that publishes changes to the live site, connect a backend or CMS with server-side authentication and a database.

## Publish

GitHub Pages can serve the static site from this repository. After merging the changes into the configured publishing branch, confirm the Pages source in repository settings. To make admin edits live for all visitors, add a server-backed CMS; local browser storage alone cannot publish shared content.

## Files

- `index.html` — page structure and admin interface
- `styles.css` — visual design and responsive layout
- `script.js` — filtering, project management, local persistence, backup import/export
