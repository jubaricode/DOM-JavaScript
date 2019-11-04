// document.querySelector('.clear-task').addEventListener('click',
//     function (e) {
//         console.log('Hello World');
//         e.preventDefault(); //  jika ada link  a href="https://google.com" mencegah default behavioe
//     });

document.querySelector('.clear-task').addEventListener('click', onClick);
function onClick(e) {
    // console.log('Click');
    let val;
    val = e;

    // Event Target element

    // val = e.target;
    // val = e.target.id; // kosong
    // val = e.target.className; //btn btn-info clear-task 
    // val = e.target.classList; // 0-btn 1-btn-info 2-clear-task

    // e.target.innerText = 'Hello';

    console.log(val);
};