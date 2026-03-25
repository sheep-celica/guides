(function () {
  var cards;
  var toggleAllButton;

  cards = Array.prototype.slice.call(document.querySelectorAll(".part-card"));
  toggleAllButton = document.querySelector("[data-part-toggle-all]");

  function getTargetCard(hash) {
    var id;
    var target;

    if (!hash || hash.charAt(0) !== "#") {
      return null;
    }

    id = hash.slice(1);
    target = document.getElementById(id);

    if (!target || !target.classList.contains("part-card")) {
      return null;
    }

    return target;
  }

  function openTargetCard(hash) {
    var card;

    card = getTargetCard(hash);

    if (!card) {
      return;
    }

    card.open = true;
    updateToggleAllButton();
  }

  function hasOpenCards() {
    return cards.some(function (card) {
      return card.open;
    });
  }

  function updateToggleAllButton() {
    if (!toggleAllButton) {
      return;
    }

    if (hasOpenCards()) {
      toggleAllButton.textContent = "Collapse All";
      toggleAllButton.setAttribute("aria-label", "Collapse all part cards");
      return;
    }

    toggleAllButton.textContent = "Expand All";
    toggleAllButton.setAttribute("aria-label", "Expand all part cards");
  }

  function setAllCards(isOpen) {
    cards.forEach(function (card) {
      card.open = isOpen;
    });

    updateToggleAllButton();
  }

  document.addEventListener("click", function (event) {
    var link;
    var href;

    link = event.target.closest('a[href^="#part-"]');

    if (!link) {
      return;
    }

    href = link.getAttribute("href");

    if (!href) {
      return;
    }

    openTargetCard(href);
  });

  if (toggleAllButton) {
    toggleAllButton.addEventListener("click", function () {
      setAllCards(!hasOpenCards());
    });
  }

  cards.forEach(function (card) {
    card.addEventListener("toggle", updateToggleAllButton);
  });

  window.addEventListener("hashchange", function () {
    openTargetCard(window.location.hash);
  });

  updateToggleAllButton();
  openTargetCard(window.location.hash);
})();
