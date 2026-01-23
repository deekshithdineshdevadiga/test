// function filterArt(category, btn = null) {
//   const cards = document.querySelectorAll(".art-card");

//   cards.forEach(card => {
//     const cardCategory = card.dataset.category?.toLowerCase();

//     if (category === "all") {
//       card.style.display = "block";
//     } 
//     else if (cardCategory === category.toLowerCase()) {
//       card.style.display = "block";
//     } 
//     else {
//       card.style.display = "none";
//     }
//   });

  // Desktop active state
//   if (btn) {
//     document.querySelectorAll(".filters button").forEach(b =>
//       b.classList.remove("active")
//     );
//     btn.classList.add("active");
//   }
// }
// function filterArt(category, btn) {
//   const cards = document.querySelectorAll(".art-card");
//   const buttons = document.querySelectorAll(".filters button");

//   buttons.forEach(b => b.classList.remove("active"));
//   btn.classList.add("active");

//   cards.forEach(card => {
//     const cardCategory = card.dataset.category;

//     if (category === "all" || cardCategory === category) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   });
// }
// function filterArt(category, btn) {
//   const cards = document.querySelectorAll(".art-card");
//   const buttons = document.querySelectorAll(".filter-btn");

//   // Filter cards
//   cards.forEach(card => {
//     if (category === "all") {
//       card.style.display = "";
//     } else {
//       card.style.display =
//         card.dataset.category === category ? "" : "none";
//     }
//   });


// buttons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     buttons.forEach(b => b.classList.remove("active"));
//     btn.classList.add("active");
//   });
// });
//   // Active button handling
// //   buttons.forEach(b => b.classList.remove("active"));
// //   if (btn) btn.classList.add("active");
// }

function filterArt(category, btn) {
  const cards = document.querySelectorAll(".art-card");
  const buttons = document.querySelectorAll(".filters button, .sidebar button");

  buttons.forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  cards.forEach(card => {
    card.style.display =
      category === "all" || card.dataset.category === category
        ? "block"
        : "none";
  });
}


  // Auto-close sidebar on mobile
  document.getElementById("sidebar")?.classList.remove("open");


// document.addEventListener("DOMContentLoaded", () => {
//   const menuBtn = document.getElementById("menuToggle");
//   const sidebar = document.getElementById("sidebar");

//   if (!menuBtn || !sidebar) {
//     console.error("Menu button or sidebar not found");
//     return;
//   }

//   menuBtn.addEventListener("click", () => {
//     sidebar.classList.toggle("open");
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
});

