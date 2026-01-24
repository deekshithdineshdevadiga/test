// const desktopToggle = document.getElementById("themeToggle");
// const mobileToggle = document.getElementById("themeToggleMobile");

// /* Load saved theme */
// if (localStorage.getItem("theme") === "dark") {
//   document.body.classList.add("dark");
//   if (desktopToggle) desktopToggle.checked = true;
//   if (mobileToggle) mobileToggle.checked = true;
// }

// /* Apply theme */
// function applyTheme(isDark) {
//   document.body.classList.toggle("dark", isDark);
//   localStorage.setItem("theme", isDark ? "dark" : "light");

//   if (desktopToggle) desktopToggle.checked = isDark;
//   if (mobileToggle) mobileToggle.checked = isDark;
// }

// /* Desktop toggle */
// if (desktopToggle) {
//   desktopToggle.addEventListener("change", e => {
//     applyTheme(e.target.checked);
//   });
// }

// /* Mobile toggle */
// if (mobileToggle) {
//   mobileToggle.addEventListener("change", e => {
//     applyTheme(e.target.checked);
//   });
// }
// const toggle = document.getElementById("themeToggle");

// /* LOAD SAVED THEME */
// const savedTheme = localStorage.getItem("theme");

// if (savedTheme === "dark") {
//   document.body.classList.add("dark");
//   toggle.checked = true;
// } else {
//   document.body.classList.remove("dark");
//   toggle.checked = false;
// }

// /* TOGGLE THEME */
// toggle.addEventListener("change", () => {
//   if (toggle.checked) {
//     document.body.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   } else {
//     document.body.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const desktopToggle = document.getElementById("themeToggle");
  const mobileToggle = document.getElementById("themeToggleMobile");

  /* ===== APPLY THEME ===== */
  function setTheme(isDark) {
    body.classList.toggle("dark", isDark);

    if (desktopToggle) desktopToggle.checked = isDark;
    if (mobileToggle) mobileToggle.checked = isDark;

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  /* ===== LOAD SAVED THEME ===== */
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    setTheme(true);
  }

  /* ===== DESKTOP TOGGLE ===== */
  if (desktopToggle) {
    desktopToggle.addEventListener("change", () => {
      setTheme(desktopToggle.checked);
    });
  }

  /* ===== MOBILE TOGGLE ===== */
  if (mobileToggle) {
    mobileToggle.addEventListener("change", () => {
      setTheme(mobileToggle.checked);
    });
  }
});










