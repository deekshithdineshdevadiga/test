let menuOpen = false;

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("menuOverlay");
const gallery = document.querySelector(".gallery");
const menuBtn = document.getElementById("menuToggle");

function toggleMenu() {
  // Mobile only
  if (window.innerWidth > 768) return;

  menuOpen = !menuOpen;

  sidebar.classList.toggle("open", menuOpen);
  gallery.classList.toggle("shifted", menuOpen);
  overlay.style.display = menuOpen ? "block" : "none";
}

/* Close menu when filter clicked (mobile) */
function filterFromMenu(category, btn) {
  filterArt(category, btn);
  toggleMenu();
}

/* Close menu on resize to desktop */
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && menuOpen) {
    menuOpen = false;
    sidebar.classList.remove("open");
    gallery.classList.remove("shifted");
    overlay.style.display = "none";
  }
});
