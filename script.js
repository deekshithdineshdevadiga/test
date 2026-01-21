function openLightbox(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function toggleDark() {
    document.body.classList.toggle("dark");
}

function filterArt(type) {
    let cards = document.querySelectorAll(".art-card");
    cards.forEach(card => {
        card.style.display =
            type === "all" || card.classList.contains(type)
            ? "block"
            : "none";
    });
}
