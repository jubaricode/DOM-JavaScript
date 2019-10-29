let val ;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

val = list;
val = listItem;

// Get Child Nodes
val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[1].nodeName;
// val = list.childNodes[1].nodeType;

// Jenis Jenis Node
// 1 - Element
// 2 - Attribute
// 3 - Text Mode
// 8 - Comment
// 9 - Document
// 10 - Doctype

// Get Children Element nodes
val = list.children;
val = list.children[2];
val = list.children[2].children[0];
list.children[1].textContent = 'Hello World';
list.children[0].id = 'test-id';
list.children[0].children[0].id = 'id-button';
val = list.children[0];

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// count child elements
val = list.childElementCount;

console.log(val);