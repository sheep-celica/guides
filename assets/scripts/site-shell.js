(function () {
  const main = document.querySelector("main.page");
  if (!main || document.querySelector("[data-site-shell-header]")) {
    return;
  }

  const stylesheet = document.querySelector('link[href*="assets/styles/site.css"]');
  const stylesheetHref = stylesheet ? stylesheet.getAttribute("href") || "" : "";
  const rootPrefixMatch = stylesheetHref.match(/^(.*)assets\/styles\/site\.css$/);
  const rootPrefix = rootPrefixMatch ? rootPrefixMatch[1] : "";

  const config = Object.assign(
    {
      brandName: "Sheep Celica",
      brandLabel: "Documentation",
      logoPath: "",
      supportEmail: "",
      githubUrl: "https://github.com/sheep-celica/guides",
      featuredProductLabel: "Pop-up Controller V10",
      featuredProductPath: "products/pop-up-controller-v10/",
      countryFlag: "",
      countryLabel: ""
    },
    window.SheepSiteConfig || {}
  );

  const homeHref = rootPrefix || "./";
  const productHref = rootPrefix + config.featuredProductPath;
  const logoPath = String(config.logoPath || "").trim();
  const logoSrc = logoPath ? rootPrefix + logoPath.replace(/^\.?\//, "") : "";
  const email = String(config.supportEmail || "").trim();
  const countryFlag = String(config.countryFlag || "").trim();
  const countryLabel = String(config.countryLabel || "").trim();
  const currentYear = new Date().getFullYear();

  function escapeHtml(value) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function buildBrandMark() {
    if (logoSrc) {
      return (
        '<span class="site-brand-mark site-brand-mark--image" aria-hidden="true">' +
        '<img class="site-brand-mark__image" src="' +
        escapeHtml(logoSrc) +
        '" alt="">' +
        "</span>"
      );
    }

    return (
      '<span class="site-brand-mark" aria-hidden="true">' +
      '<span class="site-brand-mark__bar"></span>' +
      '<span class="site-brand-mark__eye site-brand-mark__eye--left"></span>' +
      '<span class="site-brand-mark__eye site-brand-mark__eye--right"></span>' +
      "</span>"
    );
  }

  function buildExternalLink(href, label) {
    return (
      '<a class="site-shell-link" href="' +
      escapeHtml(href) +
      '" target="_blank" rel="noopener">' +
      escapeHtml(label) +
      "</a>"
    );
  }

  function buildInternalLink(href, label) {
    return (
      '<a class="site-shell-link" href="' +
      escapeHtml(href) +
      '">' +
      escapeHtml(label) +
      "</a>"
    );
  }

  const headerMarkup =
    '<header class="site-frame" data-site-shell-header>' +
    '<a class="site-brand" href="' +
    escapeHtml(homeHref) +
    '" aria-label="' +
    escapeHtml(config.brandName) +
    ' home">' +
    buildBrandMark() +
    '<span class="site-brand-copy">' +
    "<strong>" +
    escapeHtml(config.brandName) +
    "</strong>" +
    "<span>" +
    escapeHtml(config.brandLabel) +
    "</span>" +
    "</span>" +
    "</a>" +
    '<div class="site-frame-links">' +
    buildInternalLink(productHref, config.featuredProductLabel) +
    buildExternalLink(config.githubUrl, "GitHub") +
    "</div>" +
    "</header>";

  const emailMarkup = email
    ? '<a class="site-footer-email" href="mailto:' +
      escapeHtml(email) +
      '">' +
      escapeHtml(email) +
      "</a>"
    : '<p class="site-footer-copy">Add a public email in <span class="path">assets/scripts/site-config.js</span> to show it here on every page.</p>';

  const flagMarkup =
    countryFlag && countryLabel
      ? '<span class="site-footer-flag" title="' +
        escapeHtml(countryLabel) +
        '">' +
        '<span aria-hidden="true">' +
        escapeHtml(countryFlag) +
        "</span>" +
        "<span>" +
        escapeHtml(countryLabel) +
        "</span>" +
        "</span>"
      : "";

  const footerMarkup =
    '<footer class="site-footer" data-site-shell-footer>' +
    '<div class="site-footer-grid">' +
    '<section class="site-footer-panel">' +
    '<div class="site-footer-brand">' +
    buildBrandMark() +
    '<div class="site-brand-copy">' +
    "<strong>" +
    escapeHtml(config.brandName) +
    "</strong>" +
    "<span>" +
    escapeHtml(config.brandLabel) +
    "</span>" +
    "</div>" +
    "</div>" +
    '<p class="site-footer-copy">Customer-facing guides, parts notes, and support details for Sheep Celica projects.</p>' +
    "</section>" +
    '<section class="site-footer-panel">' +
    "<h2>Contact</h2>" +
    emailMarkup +
    '<p class="site-footer-copy">Use email for support questions, pricing checks, or availability updates.</p>' +
    "</section>" +
    '<nav class="site-footer-panel" aria-label="Footer">' +
    "<h2>Quick Links</h2>" +
    '<div class="site-footer-links">' +
    '<a href="' +
    escapeHtml(homeHref) +
    '">Documentation Home</a>' +
    '<a href="' +
    escapeHtml(productHref) +
    '">' +
    escapeHtml(config.featuredProductLabel) +
    "</a>" +
    '<a href="' +
    escapeHtml(config.githubUrl) +
    '" target="_blank" rel="noopener">Guides Repository</a>' +
    "</div>" +
    "</nav>" +
    "</div>" +
    '<div class="site-footer-meta">' +
    "<span>" +
    escapeHtml(config.brandName) +
    "</span>" +
    flagMarkup +
    "<span>&copy; " +
    escapeHtml(String(currentYear)) +
    "</span>" +
    "</div>" +
    "</footer>";

  main.insertAdjacentHTML("afterbegin", headerMarkup);
  main.insertAdjacentHTML("beforeend", footerMarkup);
})();
