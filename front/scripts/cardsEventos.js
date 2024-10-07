
function infoHover(card, info) {
    info.style.opacity = 0;

    card.addEventListener("mouseenter", () => {
        info.style.opacity = 1;
    });

    card.addEventListener("mouseleave", () => {
        info.style.opacity = 0;
    });
}

module.exports = infoHover;
