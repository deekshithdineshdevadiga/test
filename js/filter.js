function filterArt(category, btn, isMobile = false) {
  const cards = document.querySelectorAll(".art-card");

  cards.forEach(card => {
    card.style.display =
      category === "all" || card.dataset.category === category
        ? "block"
        : "none";
  });

  // PC active state
  if (!isMobile && btn) {
    document
      .querySelectorAll(".desktop-filters button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }

  // Mobile close sidebar
  if (isMobile) {
    document.getElementById("sidebar")?.classList.remove("open");
    document.querySelector(".gallery")?.classList.remove("shifted");
    document.getElementById("menuOverlay").style.display = "none";
  }
}

