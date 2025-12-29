const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const THEME_KEY = "site-theme";

// Apply saved theme on load
const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
} else {
  root.setAttribute("data-theme", "dark"); // default
}

// Toggle theme
if (toggle) {
  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem(THEME_KEY, next);
  });
}
// ---- Typewriter effect for logo ----
const text = "Angkon Deb"; // change this
const speed = 90; // ms per character
const target = document.getElementById("typewriter");

if (target) {
  let i = 0;
  target.textContent = "";

  const type = () => {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };

  type();
}
