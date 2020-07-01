'use strict';

//let children = document.querySelector('.product').children;
const buttons = document.querySelectorAll('button');

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    })
})

/**
 * Функция работает по клику мышки по кнопке в карточке товара, и то вызывает, то скрывает описание товара и картинку.
 * @param {MouseEvent} clickedButtonEvent
 */
function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;

    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button')
    };

    const textOnButton = card.button.innerText;
    if (textOnButton === 'Подробно') {
        showMoreText(card);
    } else if (textOnButton === 'Отмена') {
        hideMoreText(card);
    }
}
/**
 * Функция описания товара
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap 
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName 
 * @param {HTMLButtonElement} card.button
 */
function showMoreText(card) {
    card.img.style.display = 'none';
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus amet voluptatem dolore esse eos!"
    card.productName.insertAdjacentHTML('afterend', `<div class = "desc">${text}</div>`);
    card.button.innerText = 'Отмена';
}

function hideMoreText(card) {
    card.img.style.display = 'flex';
    card.button.innerText = 'Подробно';
    card.wrap.querySelector('.desc').remove();
}