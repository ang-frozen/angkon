document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".explore-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
    observer.observe(card);
  });
});
