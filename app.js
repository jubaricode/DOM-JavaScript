// Tutorial DOM JavaScript - 13 Interaksi Mouse Events dengan JavaScript

const clearBtn = document.querySelector('.clear-task');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);

// Double Click
// clearBtn.addEventListener('dblclick', runEvent);

// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// Mount enter
// card.addEventListener('mouseenter', runEvent);
// // Mount leave
// card.addEventListener('mouseleave', runEvent);
// // Mount over
// card.addEventListener('mouseover', runEvent);
// // Mount out
// card.addEventListener('mouseout', runEvent);

// Mouse move
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetY},${e.offsetX},50)`;
}