//Tutorial DOM JavaScript - 16 Mengenal Konsep Event Delegation
//https://www.youtube.com/watch?v=3L8Iel1iH4A&list=PL1aMeb5UP_PFwwuiDCeOwHIlsy-Dcwlqf&index=16
// Event Delegation

// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {

    // if (e.target.className === 'float-right btn btn-danger btn-sm delete-item') {
    //     console.log('delete item')
    // }

    if (e.target.classList.contains('delete-item')) {
        // console.log('delete item')
        e.target.parentElement.remove();
    }
}