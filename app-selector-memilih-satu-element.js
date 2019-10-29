// Single Selector
// document.getElementById()

console.log(document.getElementById('task-title'));

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// //Change Styling
// document.getElementById('task-title').style.background= '#333333';
// document.getElementById('task-title').style.color= '#ffffff';
// document.getElementById('task-title').style.padding = '5px';

// // Change Content
// document.getElementById('task-title').textContent = 'Task Table';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style="color: red">Task List</span>';

const cardHeader = document.getElementById('task-title');
//Change Styling
cardHeader.style.background= '#333333';
cardHeader.style.color= '#ffffff';
cardHeader.style.padding = '5px';

// Change Content
cardHeader.textContent = 'Task Table';
cardHeader.innerText = 'My Tasks';
cardHeader.innerHTML = '<span style="color: red">Task List</span>';

// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-header'));
console.log(document.querySelector('button'));
console.log(document.querySelector('.delete-item'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'yellow';
document.querySelector('li:nth-child(2)').style.color = 'purple';
document.querySelector('li:nth-child(2)').textContent = 'Hello World!';