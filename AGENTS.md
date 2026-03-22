# AGENTS.md

This repository hosts customer-facing documentation for Sheep Celica projects.

## Purpose

- Publish end-user documentation as HTML pages through GitHub Pages.
- Keep Markdown files as the editable source of truth.
- Preserve a simple static-site structure with no build step.

## Source Of Truth

- Editable content lives under `source/<product-name>/`.
- Published pages live under `products/<product-name>/`.
- Images live under `images/<product-name>/`.

When converting a guide, treat the Markdown file as the source of truth and update the matching HTML page instead of asking the user to maintain raw HTML manually.

## Current Product Structure

For `pop-up-controller-v10`:

- Product landing page: `products/pop-up-controller-v10/index.html`
- Installation guide source: `source/pop-up-controller-v10/installation.md`
- Installation guide page: `products/pop-up-controller-v10/installation/index.html`
- User guide source: `source/pop-up-controller-v10/user-guide.md`
- User guide page: `products/pop-up-controller-v10/user-guide/index.html`
- App flashing source: `source/pop-up-controller-v10/app-flashing.md`
- App flashing page: `products/pop-up-controller-v10/app-flashing/index.html`
- Purchase source: `source/pop-up-controller-v10/purchase.md`
- Purchase page: `products/pop-up-controller-v10/purchase/index.html`
- Parts overview source: `source/pop-up-controller-v10/parts/overview.md`
- Parts overview page: `products/pop-up-controller-v10/parts/index.html`

Part subpages follow the same pattern:

- `source/pop-up-controller-v10/parts/<part-name>.md`
- `products/pop-up-controller-v10/parts/<part-name>/index.html`

## Guide Conversion Rules

When asked to turn Markdown into HTML:

1. Read the Markdown file from `source/...`.
2. Update or create the matching published page under `products/...`.
3. Preserve the existing site visual language from `assets/styles/site.css`.
4. Keep the content customer-facing and easy to scan on mobile.
5. Prefer short sections, clear headings, numbered steps where appropriate, and simple warning/notes wording.
6. Add or update breadcrumbs and product-page links when needed.
7. If a new guide or part page is introduced, update the relevant product landing page so it links to it.
8. If images are referenced, place them under the matching `images/<product-name>/...` folder and use relative links from the page.

## Style Notes

- Keep pages simple. Avoid extra filler sections unless they help the customer.
- Favor HTML pages over PDFs unless the user explicitly asks for a PDF.
- Reuse the existing card, hero, notes, breadcrumb, and button patterns where they fit.
- Keep filenames and URLs stable once a page is published.

## Supplemental Agent Instructions

- For folder-based screenshot cleanup, read `agent-instructions/crop-snipping-tool-borders.md`.

## Notifications

- Before sending your final user-facing response for a completed task, run `C:\Users\Sheep\AppData\Local\Python\pythoncore-3.14-64\python.exe .codex\tools\notify_client.py "Codex finished" "Task complete in this repository."` from the repository root to send the desktop notification.
- When you are blocked waiting for my approval or input, run `C:\Users\Sheep\AppData\Local\Python\pythoncore-3.14-64\python.exe .codex\tools\notify_client.py "Codex needs input" "Waiting for approval or more instructions."` from the repository root to send the desktop notification.
- If the notification command fails once, continue with the task and mention briefly that the notification failed.

## If The User Starts A New Chat

If the user asks to generate a guide from a Markdown file:

- Assume they want the Markdown kept and the HTML regenerated from it.
- Do not replace the Markdown workflow with a PDF-first workflow.
- Check whether the corresponding product page should link to the new guide.
