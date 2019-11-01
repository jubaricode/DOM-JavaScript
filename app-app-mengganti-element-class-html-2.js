// Replace Element

// Create element
const newHeading = document.createElement('h3');
// Add id
newHeading.id = 'task-title';
// New Text Node
newHeading.appendChild(document.createTextNode('Task List'));

// get old element
const oldHeading = document.getElementById('card-title');
// get parent
const cardHeader = document.querySelector('.card-header');

// Replace
cardHeader.replaceChild(newHeading, oldHeading);

// Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[1]);

// console.log(newHeading);

// END of Tutorial DOM JavaScript - 10 
//Cara Mengganti dan Memanipulasi Element Class Attribute HTML Bag 1


// CLASS & ATTRIBUTE
const firstLi = document.querySelector('li:first-child');
const button = firstLi.children[0];

// console.log(firstLi);
// console.log(button);

let val;
// Display className
val = button.className;
val = button.classList[1]; // Display urutan class list posisi 2
button.classList.add('test'); // Add class list to button 
button.classList.remove('test'); // Remove class list to button 
val = button;

// Attribute
val = button.setAttribute('type', 'submit');

val = button;

console.log(val);

