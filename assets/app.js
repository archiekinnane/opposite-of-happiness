(function () {
  const path = (
    location.pathname.split("/").pop() || "index.html"
  ).toLowerCase();

  document.querySelectorAll('[data-nav]').forEach(link => {
    const href = (
      link.getAttribute("href") || ""
    ).toLowerCase();

    if (href === "podcasts.html") {
      link.textContent = "Podcasts & Features";
    }

    if (href === path) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  document.querySelectorAll('[data-expiry]').forEach(element => {
    const expiry = Date.parse(
      element.getAttribute("data-expiry")
    );

    if (!Number.isNaN(expiry) && Date.now() >= expiry) {
      const replacement = element.getAttribute(
        "data-after-expiry"
      );

      if (replacement) {
        element.textContent = replacement;
        element.removeAttribute("data-expiry");
        element.removeAttribute("data-after-expiry");
      } else {
        element.remove();
      }
    }
  });
})();
