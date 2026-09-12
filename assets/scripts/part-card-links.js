(function () {
  var cards;
  var toggleAllButtons;

  cards = Array.prototype.slice.call(document.querySelectorAll(".part-card"));
  toggleAllButtons = Array.prototype.slice.call(document.querySelectorAll("[data-part-toggle-all]"));

  function getCardsForButton(button) {
    var targetId = button.getAttribute("aria-controls");
    var target = targetId && document.getElementById(targetId);

    if (!target) {
      return cards;
    }

    return Array.prototype.slice.call(target.querySelectorAll(".part-card"));
  }

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

    closeOtherCards(card);
    card.open = true;
    updateToggleAllButtons();
  }

  function closeOtherCards(card) {
    cards.forEach(function (otherCard) {
      if (otherCard !== card) {
        closeCard(otherCard);
      }
    });
  }

  function closeCard(card) {
    var animator = card._partCardAnimator;

    if (window.partCardAnimationEnabled && animator && !animator.isClosing) {
      animator.close();
      return;
    }

    card.open = false;
  }

  function updateToggleAllButton(button) {
    button.textContent = "Collapse All";
    button.setAttribute("aria-label", "Collapse all part cards");
  }

  function updateToggleAllButtons() {
    toggleAllButtons.forEach(function (button) {
      updateToggleAllButton(button);
    });
  }

  function setAllCards(cardsForButton) {
    cardsForButton.forEach(function (card) {
      closeCard(card);
    });

    updateToggleAllButtons();
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

  toggleAllButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var cardsForButton = getCardsForButton(button);

      setAllCards(cardsForButton);
    });
  });

  cards.forEach(function (card) {
    card.addEventListener("toggle", function () {
      if (card.open && !window.partCardAnimationEnabled) {
        closeOtherCards(card);
      }

      updateToggleAllButtons();
    });
  });

  window.addEventListener("hashchange", function () {
    openTargetCard(window.location.hash);
  });

  updateToggleAllButtons();
  openTargetCard(window.location.hash);
})();
