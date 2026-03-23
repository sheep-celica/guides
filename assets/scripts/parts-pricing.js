(function () {
  var pricing = window.POPUP_CONTROLLER_V10_PART_PRICING;
  var cards;
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

  cards = document.querySelectorAll("[data-part-pn]");

  Array.prototype.forEach.call(cards, function (card) {
    var pn = card.getAttribute("data-part-pn");
    var partPricing = pricing[pn];

    if (!partPricing) {
      return;
    }

    ["eur", "usd"].forEach(function (currency) {
      var valueNodes;
      var value;

      valueNodes = card.querySelectorAll('[data-price-currency="' + currency + '"]');
      value = partPricing[currency];

      if (!valueNodes.length || value === null || value === undefined || value === "") {
        return;
      }

      Array.prototype.forEach.call(valueNodes, function (valueNode) {
        valueNode.textContent = formatPrice(value, currency);
      });
    });
  });
})();
