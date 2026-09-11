(function () {
  var toggle = document.querySelector(".nav-toggle");
  var drawer = document.getElementById("nav-drawer");

  function setOpen(open) {
    if (!toggle || !drawer) return;
    drawer.hidden = !open;
    drawer.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (toggle && drawer) {
    toggle.addEventListener("click", function () {
      setOpen(drawer.hidden);
    });
    drawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
  }

  document.querySelectorAll(".frame img").forEach(function (img) {
    function fallback() {
      var frame = img.closest(".frame");
      if (frame) frame.classList.add("is-fallback");
    }
    img.addEventListener("error", fallback);
    if (img.complete && img.naturalWidth === 0) fallback();
  });
})();
