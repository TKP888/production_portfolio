// ============================================
// CV Button Handler
// Opens CV PDF in browser PDF viewer
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const cvButton = document.getElementById("cvButton");

  if (cvButton) {
    cvButton.addEventListener("click", function (e) {
      // The link will open in a new tab/window
      // Browser will handle PDF viewing automatically
      // No additional JavaScript needed for PDF viewing
    });
  }

  // ============================================
  // Auto-update Copyright Year
  // Updates copyright year to current year
  // ============================================
  const copyrightElement = document.getElementById("copyright-year");
  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    const startYear = 2025;

    // If current year is different from start year, show range
    if (currentYear > startYear) {
      copyrightElement.innerHTML = `© Saul Roland ${startYear}-${currentYear}.<br>All rights reserved.`;
    } else {
      copyrightElement.innerHTML = `© Saul Roland ${startYear}.<br>All rights reserved.`;
    }
  }

  // ============================================
  // Contact CTA – reveal form on button click; revert on back link or scroll away
  // ============================================
  const contactRevealBtn = document.getElementById("contactRevealBtn");
  const contactCta = document.getElementById("contactCta");
  const contactFormWrapper = document.getElementById("contactFormWrapper");
  const contactNameInput = document.getElementById("contact-name");
  const contactSection = document.getElementById("contact");

  function showContactForm() {
    if (!contactFormWrapper || !contactCta) return;
    contactFormWrapper.removeAttribute("hidden");
    contactFormWrapper.classList.remove("contact-form-wrapper--closing", "contact-form-wrapper--open");
    contactFormWrapper.classList.add("contact-form-wrapper--opening");
    contactCta.classList.remove("contact-cta--hidden", "contact-cta--visible", "contact-cta--showing");
    contactCta.classList.add("contact-cta--hiding");
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        contactFormWrapper.classList.add("contact-form-wrapper--open");
      });
    });
    contactCta.addEventListener(
      "transitionend",
      function ctaFadeOutDone(e) {
        if (e.target !== contactCta || e.propertyName !== "opacity") return;
        contactCta.removeEventListener("transitionend", ctaFadeOutDone);
        contactCta.classList.add("contact-cta--hidden");
        contactCta.classList.remove("contact-cta--hiding");
      },
      { once: false }
    );
    contactFormWrapper.addEventListener(
      "transitionend",
      function formFadeInDone(e) {
        if (e.target !== contactFormWrapper || e.propertyName !== "opacity") return;
        contactFormWrapper.removeEventListener("transitionend", formFadeInDone);
        contactFormWrapper.classList.remove("contact-form-wrapper--opening", "contact-form-wrapper--open");
        if (contactNameInput) contactNameInput.focus();
      },
      { once: false }
    );
  }

  function showContactCta() {
    if (contactCta) {
      contactCta.classList.remove("contact-cta--hidden", "contact-cta--hiding", "contact-cta--showing", "contact-cta--visible");
    }
    if (contactFormWrapper) {
      contactFormWrapper.classList.remove("contact-form-wrapper--opening", "contact-form-wrapper--open", "contact-form-wrapper--closing");
      contactFormWrapper.setAttribute("hidden", "");
    }
  }

  function animateBackToCta() {
    if (!contactFormWrapper || contactFormWrapper.hasAttribute("hidden")) return;
    contactFormWrapper.classList.add("contact-form-wrapper--closing");
    var revealed = false;

    function revealCta() {
      if (revealed) return;
      revealed = true;
      contactFormWrapper.classList.remove("contact-form-wrapper--closing");
      contactFormWrapper.setAttribute("hidden", "");
      if (!contactCta) return;
      contactCta.classList.remove("contact-cta--hidden");
      contactCta.classList.add("contact-cta--showing");
      contactCta.offsetHeight;
      setTimeout(function () {
        contactCta.classList.add("contact-cta--visible");
      }, 20);
      contactCta.addEventListener(
        "transitionend",
        function onCtaShow(e) {
          if (e.target !== contactCta || e.propertyName !== "opacity") return;
          contactCta.removeEventListener("transitionend", onCtaShow);
          contactCta.classList.remove("contact-cta--showing", "contact-cta--visible");
        },
        { once: false }
      );
    }

    contactFormWrapper.addEventListener(
      "transitionend",
      function onFormClose(e) {
        if (e.target !== contactFormWrapper || e.propertyName !== "opacity") return;
        contactFormWrapper.removeEventListener("transitionend", onFormClose);
        revealCta();
      },
      { once: true }
    );
    setTimeout(revealCta, 350);
  }

  if (contactRevealBtn && contactCta && contactFormWrapper) {
    contactRevealBtn.addEventListener("click", showContactForm);

    document.addEventListener("click", function (e) {
      if (
        contactFormWrapper &&
        !contactFormWrapper.hasAttribute("hidden") &&
        !contactFormWrapper.contains(e.target) &&
        e.target !== contactRevealBtn
      ) {
        animateBackToCta();
      }
    });

    if (contactSection) {
      var contactObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              showContactCta();
            }
          });
        },
        { threshold: 0.1 }
      );
      contactObserver.observe(contactSection);
    }
  }
});

// ============================================
// Smooth scrolling for anchor links (if needed)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
