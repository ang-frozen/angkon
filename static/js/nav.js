document.addEventListener("DOMContentLoaded", () => {
  const ham = document.getElementById("hamburger");
  const nav = document.getElementById("nav-menu");

  if (!ham || !nav) return;

  // Toggle menu
  ham.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("open");
  });

  // Close when clicking outside
  document.addEventListener("click", () => {
    nav.classList.remove("open");
  });

  // Prevent closing when clicking inside nav
  nav.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Close on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 769) {
      nav.classList.remove("open");
    }
  });
});
