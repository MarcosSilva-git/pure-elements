// const attributes = {
//     "rotateTo": {
//         "left": card => { 
//             card.style.setProperty('--front-rotate-angle', '180deg');
//             card.style.setProperty('--back-rotate-angle', '-180deg');
//         },
//         "right": card => { 
//             card.style.setProperty('--front-rotate-angle', '-180deg');
//             card.style.setProperty('--back-rotate-angle', '180deg');
//         },
//     }
// }

document.addEventListener("click", event => {
    const card = event.target.closest('pe-flashcard')

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

    // const rotateDirection = card.getAttribute('rotateTo ') || 'left';

    // attributes["rotateTo"][rotateDirection](card);
}