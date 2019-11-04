// Tutorial DOM JavaScript - 14 Interaksi Keyboard dan Input Events dengan Jav
const form = document.querySelector('form');
const taskInput = document.getElementById('input-task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');


// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keyup
// taskInput.addEventListener('keyup', runEvent);
// // Keypress
// taskInput.addEventListener('keypress', runEvent);
// // Cut
// taskInput.addEventListener('cut', runEvent);
// // Paste
// taskInput.addEventListener('paste', runEvent);

// // Focus
// taskInput.addEventListener('focus', runEvent);

// // Blur
// taskInput.addEventListener('blur', runEvent);
// // Input
// taskInput.addEventListener('input', runEvent);
// Change
select.addEventListener('change', runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    // console.log(e.target.value);

    // heading.innerText = e.target.value;

    // console.log(taskInput.value);

    // taskInput.value = '';

    // e.preventDefault();
}