
function filterArt(type, btn) {
  // active button
  document.querySelectorAll(".filters button")
    .forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  // filter cards
  document.querySelectorAll(".art-card").forEach(card => {
    const category = card.getAttribute("data-category");

    if (type === "all" || category === type) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

