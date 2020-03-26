'use strict';

let modalWindow = document.getElementById('modalWin');

function showModal() {
    console.log('clicked');
    modalWindow.style.display = 'block';
}

function closeModal() {
    modalWindow.style.display = 'none';
}

