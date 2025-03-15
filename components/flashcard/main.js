document.addEventListener("click", event => {
    const card = event.target.closest('c-flashcard')

    if (card && card.hasAttribute("clickable")) {
        c_flashcard_toggle(card)
    }
})

function c_flashcard_toggle(card) {
    if (card.hasAttribute('flipped')) {
        card.removeAttribute('flipped');
    } else {
        card.setAttribute('flipped', "");
    }
}