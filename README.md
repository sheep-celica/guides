# Pop-up Controller V10 Guides

Customer-facing guides and media for the Pop-up Controller V10 project.

This repository is the canonical home for installation guides, app-based firmware flashing guides, and related images for the Pop-up Controller V10. The firmware and desktop application repositories should link here instead of storing full end-user documents directly.

## Scope

This repository is intended for:

- owners and customers installing the controller
- curious tinkerers following the end-user workflow
- stable public PDF and image links that other repos can reference

This repository is not intended to replace the developer-focused documentation in the firmware or desktop app repositories.

## Repository Layout

```text
README.md
LICENSE
pdf/
  installation-guide.pdf
  app-flashing-guide.pdf
images/
  install/
  screenshots/
  product/
```

## Planned Canonical Filenames

These filenames are intended to stay stable once guides are published, so linked repositories do not need frequent URL changes:

- `pdf/installation-guide.pdf`
- `pdf/app-flashing-guide.pdf`

## Suggested Public URLs

If this repository remains `sheep-celica/guides`, the cleanest public guide URLs are:

- `https://sheep-celica.github.io/guides/pdf/installation-guide.pdf`
- `https://sheep-celica.github.io/guides/pdf/app-flashing-guide.pdf`

If you decide not to enable GitHub Pages, direct raw file links can still work:

- `https://raw.githubusercontent.com/sheep-celica/guides/main/pdf/installation-guide.pdf`
- `https://raw.githubusercontent.com/sheep-celica/guides/main/pdf/app-flashing-guide.pdf`

## GitHub Pages Recommendation

GitHub Pages is optional, but recommended for this repository.

Why it is worth enabling:

- cleaner customer-facing URLs
- good fit for static PDFs and images
- no need for a build system
- this structure already works with Pages from the `main` branch root

You do not need a separate `docs/` or `pages/` folder unless you later want a dedicated web landing page. For now, keeping the repository flat and content-first is the simplest approach.

## License

Unless otherwise noted, the guides, PDFs, images, and other non-code content in this repository are licensed under the Creative Commons Attribution-NoDerivatives 4.0 International license.

- License text: [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/)

If scripts or source code are added later, they can be given a separate software license in their own files or directories.
