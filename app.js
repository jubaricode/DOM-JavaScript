// // document.getElementsByClassName

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[2].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('list-group-item');
// console.log(listItems);

// document.getElementsByTagName

// const lis = document.getElementsByTagName('li');
// let lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[2].textContent = 'Hello';

// // Convert HTML Collection to Array
// lis = Array.from(lis);

// // lis.reverse();

// lis.forEach(function(li, index){
//     li.textContent = `${index}: Hello`;
// });

// console.log(lis);

const items = document.querySelectorAll('ul.list-group li.list-group-item');

items.forEach(function(item,index){
     item.textContent = `${index} : Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
  
liOdd.forEach(function(li,index){
    li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f4f4f4';
}

console.log(items);