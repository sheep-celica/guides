(function () {
  const selectors = document.querySelectorAll("[data-behavior-selector]");

  selectors.forEach(function (selector) {
    const root = selector.closest(".user-guide-behavior");
    const buttons = Array.from(selector.querySelectorAll("[data-behavior-tab]"));
    const triggers = root ? Array.from(root.querySelectorAll("[data-behavior-tab-trigger]")) : [];
    const panels = root ? Array.from(root.querySelectorAll("[data-behavior-panel]")) : [];

    if (!root || buttons.length === 0 || panels.length === 0) {
      return;
    }

    root.classList.add("behavior-tabs-ready");

    function activate(targetId, moveFocus) {
      buttons.forEach(function (button) {
        const isActive = button.getAttribute("data-behavior-tab") === targetId;
        button.setAttribute("aria-selected", isActive ? "true" : "false");
        button.tabIndex = isActive ? 0 : -1;
      });

      panels.forEach(function (panel) {
        panel.hidden = panel.id !== targetId;
      });

      if (moveFocus) {
        const activeButton = buttons.find(function (button) {
          return button.getAttribute("data-behavior-tab") === targetId;
        });

        if (activeButton) {
          activeButton.focus();
        }
      }
    }

    buttons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        activate(button.getAttribute("data-behavior-tab"), false);
      });

      button.addEventListener("keydown", function (event) {
        let nextIndex = index;

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          nextIndex = (index + 1) % buttons.length;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          nextIndex = (index - 1 + buttons.length) % buttons.length;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = buttons.length - 1;
        } else {
          return;
        }

        event.preventDefault();
        activate(buttons[nextIndex].getAttribute("data-behavior-tab"), true);
      });
    });

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const targetId = trigger.getAttribute("data-behavior-tab-trigger");
        const targetButton = buttons.find(function (button) {
          return button.getAttribute("data-behavior-tab") === targetId;
        });

        if (targetButton) {
          activate(targetId, true);
        }
      });
    });

    activate(buttons[0].getAttribute("data-behavior-tab"), false);
  });
})();
