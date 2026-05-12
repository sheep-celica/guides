(function () {
  var pricing = window.POPUP_CONTROLLER_V10_PACKAGE_PRICING;
  var packageCards;
  var priceSymbols = {
    eur: "\u20ac",
    usd: "$"
  };

  function formatPrice(value, currency) {
    var text;

    if (value === null || value === undefined) {
      return "";
    }

    text = String(value).trim();

    if (!text) {
      return "";
    }

    if (/^(tbd|contact|quote)/i.test(text)) {
      return text;
    }

    if (/^(EUR|USD)\s/i.test(text) || /^[\u20ac$]/.test(text)) {
      return text;
    }

    return (priceSymbols[currency] || "") + text;
  }

  if (!pricing) {
    return;
  }

  packageCards = document.querySelectorAll("[data-package-key]");

  Array.prototype.forEach.call(packageCards, function (packageCard) {
    var packageKey = packageCard.getAttribute("data-package-key");
    var packagePricing = pricing[packageKey];

    if (!packagePricing) {
      return;
    }

    ["eur", "usd"].forEach(function (currency) {
      var valueNodes;
      var value;

      valueNodes = packageCard.querySelectorAll('[data-package-price-currency="' + currency + '"]');
      value = packagePricing[currency];

      if (!valueNodes.length || value === null || value === undefined || value === "") {
        return;
      }

      Array.prototype.forEach.call(valueNodes, function (valueNode) {
        valueNode.textContent = formatPrice(value, currency);
      });
    });
  });
})();
