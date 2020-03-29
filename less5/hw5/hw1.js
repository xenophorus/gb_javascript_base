'use strict';
/*
* Вроде все просто, а с этим заданием я намучался. А потом перенес загрузку скрипта вниз и все заработало.
* Курс SoloLearn по JS в автобусе на работу тоже не повредил)
* */


let modalWindow = document.getElementById('modalWin');

function showModal() {
    console.log('clicked');
    modalWindow.style.display = 'block';
}

function closeModal() {
    modalWindow.style.display = 'none';
}
