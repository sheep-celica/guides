# Sheep Celica Documentation

Customer-facing guides and media for Sheep Celica projects.

This repository is the canonical home for installation guides, user guides, app workflow guides, parts pages, purchase information, screenshots, product photos, and other customer-facing documentation. Individual project repositories should link here instead of carrying full end-user documents directly.

## Scope

This repository is intended for:

- owners and customers following real install and usage workflows
- curious tinkerers looking for end-user documentation
- stable public HTML page links that other repositories can reference
- a GitHub Pages site with one landing page per product
- a Markdown-first workflow for page drafting and future edits

This repository is not intended to replace developer-focused documentation in each product's code repository.

## Repository Layout

```text
README.md
LICENSE
index.html
assets/
  styles/
    site.css
products/
  pop-up-controller-v10/
    index.html
    installation/
      index.html
    user-guide/
      index.html
    app-flashing/
      index.html
    parts/
      index.html
      controller-board/
        index.html
      adapter-harness/
        index.html
    purchase/
      index.html
source/
  pop-up-controller-v10/
    installation.md
    user-guide.md
    app-flashing.md
    purchase.md
    parts/
      overview.md
      controller-board.md
      adapter-harness.md
images/
  pop-up-controller-v10/
    install/
    screenshots/
    product/
```

## Authoring Workflow

1. Write or edit the content in Markdown under `source/<product-name>/`.
2. Rework that Markdown into the published HTML pages under `products/<product-name>/`.
3. Update related images under `images/<product-name>/` as needed.

This keeps Markdown as the editable source of truth while GitHub Pages serves the customer-facing HTML pages.

## GitHub Pages Structure

GitHub Pages can host multiple subpages from the same repository. The current structure uses:

- the root page as the main documentation hub
- one product landing page under `products/<product-name>/`
- one published guide, parts, or purchase page per workflow under the product folder

With GitHub Pages enabled for `main` and `/(root)`, the current planned URLs are:

- `https://sheep-celica.github.io/guides/`
- `https://sheep-celica.github.io/guides/products/pop-up-controller-v10/`
- `https://sheep-celica.github.io/guides/products/pop-up-controller-v10/installation/`
- `https://sheep-celica.github.io/guides/products/pop-up-controller-v10/user-guide/`
- `https://sheep-celica.github.io/guides/products/pop-up-controller-v10/app-flashing/`
- `https://sheep-celica.github.io/guides/products/pop-up-controller-v10/parts/`
- `https://sheep-celica.github.io/guides/products/pop-up-controller-v10/purchase/`

## Current Products

- `Pop-up Controller V10`

## License

Unless otherwise noted, the guides, HTML pages, images, and other non-code content in this repository are licensed under the Creative Commons Attribution-NoDerivatives 4.0 International license.

- License text: [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/)

If scripts or source code are added later, they can be given a separate software license in their own files or directories.
