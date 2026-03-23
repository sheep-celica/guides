(function () {
  var cards;
  var reduceMotionQuery;

  if (!("animate" in Element.prototype) || !("matchMedia" in window)) {
    return;
  }

  cards = document.querySelectorAll(".part-card");
  reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  function PartCardAnimator(card) {
    this.card = card;
    this.summary = card.querySelector("summary");
    this.content = card.querySelector(".part-content");
    this.heightAnimation = null;
    this.contentAnimation = null;
    this.isClosing = false;
    this.isExpanding = false;

    if (!this.summary || !this.content) {
      return;
    }

    this.summary.addEventListener("click", this.onClick.bind(this));
  }

  PartCardAnimator.prototype.resetContentState = function () {
    if (this.contentAnimation) {
      this.contentAnimation.cancel();
      this.contentAnimation = null;
    }

    this.content.style.opacity = "";
    this.content.style.transform = "";
  };

  PartCardAnimator.prototype.onClick = function (event) {
    if (reduceMotionQuery.matches) {
      return;
    }

    event.preventDefault();

    if (this.isClosing || !this.card.open) {
      this.open();
      return;
    }

    this.close();
  };

  PartCardAnimator.prototype.cancelAnimations = function () {
    if (this.heightAnimation) {
      this.heightAnimation.cancel();
      this.heightAnimation = null;
    }

    this.resetContentState();
  };

  PartCardAnimator.prototype.finish = function (isOpen) {
    this.isClosing = false;
    this.isExpanding = false;
    this.card.open = isOpen;
    this.card.style.height = "";
    this.card.style.overflow = "";
    this.card.removeAttribute("data-animating");
    this.resetContentState();
    this.heightAnimation = null;
  };

  PartCardAnimator.prototype.close = function () {
    var startHeight;
    var endHeight;

    this.isClosing = true;
    this.isExpanding = false;
    this.card.setAttribute("data-animating", "collapse");
    this.card.style.overflow = "hidden";

    this.cancelAnimations();

    startHeight = this.card.offsetHeight;
    endHeight = this.summary.offsetHeight;

    this.contentAnimation = this.content.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(-4px)" }
      ],
      {
        duration: 160,
        easing: "ease-out",
        fill: "forwards"
      }
    );

    this.heightAnimation = this.card.animate(
      {
        height: [startHeight + "px", endHeight + "px"]
      },
      {
        duration: 220,
        easing: "cubic-bezier(0.32, 0.72, 0, 1)"
      }
    );

    this.heightAnimation.onfinish = this.finish.bind(this, false);
    this.heightAnimation.oncancel = function () {
      this.isClosing = false;
    }.bind(this);
  };

  PartCardAnimator.prototype.open = function () {
    var startHeight;

    this.isClosing = false;
    this.isExpanding = true;
    this.card.setAttribute("data-animating", "expand");
    this.card.style.overflow = "hidden";

    this.cancelAnimations();

    startHeight = this.card.offsetHeight;
    this.card.style.height = startHeight + "px";
    this.card.open = true;

    window.requestAnimationFrame(function () {
      var endHeight;

      endHeight = this.summary.offsetHeight + this.content.offsetHeight;

      this.contentAnimation = this.content.animate(
        [
          { opacity: 0, transform: "translateY(-6px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        {
          duration: 180,
          easing: "ease-out"
        }
      );

      this.heightAnimation = this.card.animate(
        {
          height: [startHeight + "px", endHeight + "px"]
        },
        {
          duration: 220,
          easing: "cubic-bezier(0.32, 0.72, 0, 1)"
        }
      );

      this.heightAnimation.onfinish = this.finish.bind(this, true);
      this.heightAnimation.oncancel = function () {
        this.isExpanding = false;
      }.bind(this);
    }.bind(this));
  };

  Array.prototype.forEach.call(cards, function (card) {
    new PartCardAnimator(card);
  });
})();
