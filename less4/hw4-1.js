'use strict';

/*1. Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
    мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
    - единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:

{
    units: 5, //это единицы
        tens: 4,  //это десятки
    hundreds: 0, //это сотни
}

Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
    необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

    Вам может пригодиться:
      Number.isInteger(value) – функция проверяет, является ли переданное число целым, подробнее здесь
https://mzl.la/2XCVSsx
      Math.floor(value) - метод возвращает целое число, которое меньше или равно данному числу (проще
говоря округляет в меньшую сторону), подробнее здесь https://mzl.la/2Qx42SO .
*/

function splitter(x) {
    let a = x.toString().length;
    numSplitted.units = parseInt(x.toString().charAt(a - 1));
    if (x.toString().length > 1) {
        numSplitted.tens = parseInt(x.toString().charAt(a - 2));
    } else {
        numSplitted.tens = 0;
    }
    if (x.toString().length > 2) {
        numSplitted.hundreds = parseInt(x.toString().slice(0, a - 2));
    } else {
        numSplitted.hundreds = 0;
    }
}

/*
Правильнее эту функццию надо было реализовать через Math.trunc(). Сразу не догадался
let x = 1523;
let hundreds = Math.trunc(x / 100);
let tens = Math.trunc((x - hundreds * 100) / 10);
let units = x - hundreds * 100 - tens * 10;
console.log(hundreds, tens, units);
*/

let numSplitted = {
    units: 0,
    tens: 0,
    hundreds: 0
};

let x = 445;
splitter(x);
console.log(numSplitted);


