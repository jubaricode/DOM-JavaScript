// Create element
const li = document.createElement('li');

// Add Class
li.className = 'list-group-item';

// Add id 
li.id = 'new-item'

// // Add attribut
li.setAttribute('title', 'New Item');


// add inner html
li.innerHTML = '<button class="float-right btn btn-danger btn-sm delete-item">x</button>';

// append text node
li.appendChild(document.createTextNode('Hello, World'));

// append child element
document.querySelector('ul.list-group').appendChild(li);

console.log(li);