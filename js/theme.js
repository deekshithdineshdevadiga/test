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
const toggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});






