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

console.log(newHeading);

//Tutorial DOM JavaScript - 10 
//Cara Mengganti dan Memanipulasi Element Class Attribute HTML Bag 1

