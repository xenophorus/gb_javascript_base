'use strict';

/*
* Я хотел добиться того, чтобы автоматически созданный элемент на странице мог работать так,
* как указано в задании. Это дает, например, возможность привязать к элементам БД
* */

for (let i = 0; i < 6; i++) {
    let imageSrc = document.createElement('img');
    imageSrc.setAttribute('src', 'https://blog.gemalto.com/wp-content/uploads/2019/12/FRT-monkey-sqr-300x300.jpg');
    let divCommodity = document.createElement('div');
    divCommodity.classList.add('commodity');
    divCommodity.setAttribute('id', 'commodity' + i);
    let divImage = document.createElement('div');
    divImage.classList.add('image');
    let divDescr = document.createElement('div');
    divDescr.classList.add('descr');
    let inputButton = document.createElement("input");
    inputButton.setAttribute('type', 'button');
    inputButton.setAttribute('value', "Подробнее");
    inputButton.setAttribute('class', "btn descriptioner");
    inputButton.setAttribute('onclick', "showDescription(this)");
    inputButton.setAttribute('id', 'btn' + i);

    document.querySelector('div.task2').appendChild(divCommodity);
    divCommodity.appendChild(divImage);
    divImage.appendChild(imageSrc);
    divCommodity.appendChild(divDescr);
    divDescr.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid dolorum earum eius expedita facere fugit, illo iste magni maiores necessitatibus quae quidem soluta vero voluptatem! Aliquam culpa dolorum incidunt maiores natus nesciunt possimus temporibus? Dolor earum eius eveniet ex illum ipsa minima molestiae molestias neque nisi perferendis quibusdam quisquam quod recusandae reprehenderit rerum, sit, sunt vero vitae voluptatibus? Aliquam at cumque incidunt nulla soluta voluptatem. Autem blanditiis culpa, dolores et eum id magni perspiciatis reprehenderit sunt ullam vel vero?';
    divCommodity.appendChild(inputButton);
}



function showDescription(obj) {
    /**
     * Получаем div'ы с картинкой и текстом
     * */
    let fImage = obj.parentElement.children[0];
    let fText = obj.parentElement.children[1];
    if (obj.value === 'Подробнее') {
        obj.setAttribute('value', "Отмена");
        fImage.style.display = 'none';
        fText.style.display = 'block';
    } else if (obj.value === 'Отмена') {
        obj.setAttribute('value', "Подробнее");
        fImage.style.display = 'block';
        fText.style.display = 'none';
    }
}


