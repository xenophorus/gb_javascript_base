'use strict';

//***********config.js
/**
 *
 * @type {{colsCount: number, rowsCount: number}}
 */

const config = {
    rowsCount: 10,
    colsCount: 10,
};


//**********renderer.js
let renderer = {
    map: '',
    render() {
        for (let row = 0; row < config.rowsCount; row++) {
            for (let col = 0; col < config.colsCount; col++) {
                if (player.y === row && player.x === col) {
                    this.map += 'o  '
                } else {
                    this.map += 'x  ';
                }
            }
            this.map += '\n';
        }
        console.log(this.map);
    },
    clear() {
        console.clear();
        this.map = '';
    }
};

/**
 * Функция проверяет позицию игрока и при выходе за границу выводит его с другой стороны
 * @param n
 * @returns {*}
 */
function positionChecker(n) {
    if (n.x < 0) {
        n.x = config.rowsCount - 1
    }
    if (n.y < 0) {
        n.y = config.colsCount - 1
    }
    if (n.x > config.rowsCount - 1) {
        n.x = 0
    }
    if (n.y > config.colsCount - 1) {
        n.y = 0
    }
    return (n);
}

//***********player.js
const player = {
    x: 0,
    y: 0,

    move(nextPt) {
        this.x = nextPt.x;
        this.y = nextPt.y;
    },
};


//***********mover.js
let mover = {
    getDirection() {
        let availDirections = [2, 4, 6, 8];
        while (true) {
            let direction = parseInt(prompt('Введите число (2, 4, 6, 8) для направления, "Отмена" для выхода'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести число (2, 4, 6, 8)');
                continue;
            }
            return direction;
        }
    },
    getNextPosition(direction) {
        let nextPos = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 2:
                nextPos.y++;
                break;
            case 4:
                nextPos.x--;
                break;
            case 6:
                nextPos.x++;
                break;
            case 8:
                nextPos.y--;
                break;
        }
        positionChecker(nextPos);
        return nextPos;

    }
};


//***********game.js
let game = {
    run() {
        while (true) {
            let direction = mover.getDirection();
            if (direction === null) {
                 console.log('Game over');
                 return;
            }
            let nextPt = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPt);
            renderer.render();

        }
    },
    init() {
        console.log('Ваша позиция на поле в виде "o"');
        renderer.render();
        //console.log('Type "game.run()" and press Enter');
    }
};

function start() {
    renderer.clear();
    game.init();
    game.run();
}
