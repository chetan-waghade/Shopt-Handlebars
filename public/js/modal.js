const modal = document.querySelector('.background-login-modal');
const closeModal = document.querySelector('#close_modal')
const openModal = document.querySelector('#open_modal')

openModal.addEventListener('click', () => {
    modal.style.display = 'flex';
})

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
})
