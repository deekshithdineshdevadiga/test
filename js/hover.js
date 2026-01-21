document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".art-card");

  cards.forEach(card => {
    // Desktop hover
    card.addEventListener("mouseenter", () => {
      card.classList.add("hovered");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovered");
    });

    // Mobile tap support
    card.addEventListener("click", () => {
      cards.forEach(c => c !== card && c.classList.remove("hovered"));
      card.classList.toggle("hovered");
    });
  });
});
