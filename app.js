//Tutorial DOM JavaScript - 15 Mengenal Konsep Event Bubbling dan Capturing
// onclick="event.stopPropagation()"  untuk stop event bubbling
// Event Bubbling dan Event Capturing

// Dipakai untuk Event Delegation

document.querySelector('#card-title').addEventListener('click',
    function () {
        console.log('card title');
    });


document.querySelector('.card-header').addEventListener('click',
    function () {
        console.log('card header');
    });


document.querySelector('.card').addEventListener('click',
    function () {
        console.log('card');
    }, true);


document.querySelector('.col-md-12').addEventListener('click',
    function () {
        console.log('col');
    }, true);

document.querySelector('.container').addEventListener('click',
    function () {
        console.log('container');
    }, true);
