'use strict';

/*
2. С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно, чтобы результат выглядел так:

0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число

*/
console.log('********************* 1 **********************');

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i of arr) {
    if (i === 0) {
        console.log(i, '- это ноль')
    } else if (i % 2 === 0) {
        console.log(i, '- четное число')
    } else {
        console.log(i, '- нечетное число')
    }
}

/*
3. Выведите в консоль значения, указанные рядом с комментариями:

 */
console.log('********************* 2 **********************');

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author, 'author');
console.log(post.comments[0].rating.dislikes, 'dislikes');
console.log(post.comments[0].userId, 'userId');
console.log(post.comments[0].text, 'text');

/*
4. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach https://mzl.la/1AOMMWX :*/

console.log('********************* 3 **********************');

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (i) {
    i.price = i.price * 0.85; // можно подробно расписать проценты - i.price - (i.price / 100 * 15)
    console.log(i.id, i.price);
});

/*
5.   Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
    1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
    2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ */

console.log('********************* 4 **********************');

const products1 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let pr_photos = products1.filter(function (i) {
    if (i.hasOwnProperty('photos') && i.photos.length > 0 ) {
        return i;
    }
});

// let pr_sorted = products1.sort(function (i, j) {
//     if (i.price > j.price) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

let pr_sorted = products1.sort(function (i, j) {
    return i.price - j.price;
});

// два варианта, оба работают,

console.log(pr_photos);
console.log(pr_sorted);

console.log('********************* 5 **********************');

/*
6. (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла for числа от 0 до 9,
    НЕ используя тело цикла. То есть выглядеть должно примерно так:
 */
//    for(…){/* здесь пусто */}



for (let i = 0; i < 10;console.log(i), i++) {}



console.log('********************* 6 **********************');
/*
7.  Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
    только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

for (let i = 0; i < 20; i++) {
    let str1 = '';
    for (let j = i; j >= 0; j--) {
        str1 += 'x';
    }
    console.log(str1);
}
