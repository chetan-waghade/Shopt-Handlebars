const addQuantity = document.querySelector('.addQuantity');
const removeQuantity = document.querySelector('.removeQuantity');
const itemQuantity = document.querySelector('.itemQuantity');



const cart = {
    totalItem: 0
}

addQuantity.addEventListener('click', () => {
    itemQuantity.textContent = 1;
})