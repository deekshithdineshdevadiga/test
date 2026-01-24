document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const gallery = document.querySelector(".gallery");
  const overlay = document.getElementById("menuOverlay");

  if (!menuToggle || !sidebar) return;

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    gallery?.classList.toggle("shifted");

    if (overlay) {
      overlay.style.display = sidebar.classList.contains("open")
        ? "block"
        : "none";
    }
  });

  // Close when clicking overlay
  overlay?.addEventListener("click", () => {
    sidebar.classList.remove("open");
    gallery?.classList.remove("shifted");
    overlay.style.display = "none";
  });
});
