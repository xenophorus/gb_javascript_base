'use strict';

let chessTable = document.createElement('div');
chessTable.classList.add('chessTable');

function createChessboard(n, a) {
    document.querySelector('div.task3').appendChild(chessTable);
    for (let i = n; i >= 0; i--) {
        let chRow = document.createElement('div');
        chRow.classList.add('row');
        chRow.setAttribute('id', 'r' + (i));
        chessTable.appendChild(chRow);
        let row = chessTable.lastElementChild;
        /*
        * Пришлось придумать вот такую странную логику заполнения доски - если ряд заканчивается на белую клетку,
        * следующий начинается с такой же. Вот для того переменная 'a' и нужна. Здесь меняется начало ряда
        * */
        if (a === 1) {
            a--;
        } else {
            a++;
        }
        for (let j = 0; j < n + 1; j++) {
            let chCell = document.createElement('div');
            chCell.classList.add('cell');
            chCell.setAttribute('id', ('c' + i) + j);
            row.appendChild(chCell);

            /*
            * Хотел добавить span для обозначения координат клеток, и добавил, но потом нечаянно его убил)
            * А было бы красивее
            * */
            if (j === 0 && i === 0) {
                row.lastElementChild.classList.add('cellZero');
            } else if (j === 0 && i !== 0) {
                row.lastElementChild.classList.add('cell0');
                row.lastElementChild.textContent = (i).toString();
            } else if (j !== 0 && i === 0) {
                row.lastElementChild.classList.add('cellBottom');
                let letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
                row.lastElementChild.textContent = letters[j];
            } else {
                if (a === 1) {
                    row.lastElementChild.classList.add('cellb');
                    a--;
                } else {
                    row.lastElementChild.classList.add('cellw');
                    a++;
                }
            }
        }
    }
}


function fillChessboard() {
    /* Картинки. Шрифтом мне не понравилось. */
    let imgWPawn = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/45px-Chess_plt45.svg.png';
    let imgWKnight = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/45px-Chess_nlt45.svg.png';
    let imgWBishop = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/45px-Chess_blt45.svg.png';
    let imgWRook = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/45px-Chess_rlt45.svg.png';
    let imgWQueen = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/45px-Chess_qlt45.svg.png';
    let imgWKing = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/45px-Chess_klt45.svg.png';
    let imgBPawn = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/50px-Chess_pdt45.svg.png';
    let imgBKnight = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/50px-Chess_ndt45.svg.png';
    let imgBBishop = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/50px-Chess_bdt45.svg.png';
    let imgBRook = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/50px-Chess_rdt45.svg.png';
    let imgBQueen = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/50px-Chess_qdt45.svg.png';
    let imgBKing = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/50px-Chess_kdt45.svg.png';
    /*
    * Если бы надо было писать игру в шахматы, я бы решил заполнение через объекты.
    * Тогда фигурами можно было бы управлять. Но в 3 ночи я пошел не по лучшему, а по простейшему решению -
    * правильная расстановка в списке и заполнение через цикл
    * */
    let whFigures = [imgWPawn, imgWRook, imgWKnight, imgWBishop, imgWQueen, imgWKing, imgWBishop, imgWKnight, imgWRook];
    let blFigures = [imgBPawn, imgBRook, imgBKnight, imgBBishop, imgBQueen, imgBKing, imgBBishop, imgBKnight, imgBRook];

    filler(blFigures, 'c8', 'c7');
    filler(whFigures, 'c1', 'c2');

}

function filler(figures, rowFigures, rowPawns) {
    for (let i = 1; i < 9; i++) {
        let cellToFill = document.querySelector('div#' + rowFigures + i.toString());
        let chessImg = document.createElement('img');
        chessImg.classList.add('chessImg');
        cellToFill.appendChild(chessImg);
        cellToFill.firstElementChild.setAttribute('src', figures[i]);
    }
    for (let i = 1; i < 9; i++) {
        let cellToFill = document.querySelector('div#' + rowPawns + i.toString());
        let chessImg = document.createElement('img');
        chessImg.classList.add('chessImg');
        cellToFill.appendChild(chessImg);
        cellToFill.firstElementChild.setAttribute('src', figures[0]);
    }
}

createChessboard(8, 1);
fillChessboard();
