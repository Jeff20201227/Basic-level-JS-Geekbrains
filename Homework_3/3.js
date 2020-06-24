"use strict"

const products = [{
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

/*  Мой первый готовый вариант выполнения задачи, без подсматривания решения
let discont = 0.15;

function discontPrice(price, discont) {
    return (price - (price * discont))
}

let price_1 = products[0].price;
let price_2 = products[1].price;
let price_3 = products[2].price;

document.write(discontPrice(price_1, discont) + " рублей итоговая цена по скидке для первого продукта.<br>");
document.write(discontPrice(price_2, discont) + " рублей итоговая цена по скидке для второго продукта.<br>");
document.write(discontPrice(price_3, discont) + " рублей итоговая цена по скидке для третьего продукта.<br>");
*/

products.forEach(item => {
    item.price = item.price - item.price * 0.15;
});

let price_1 = products[0].price;
let price_2 = products[1].price;
let price_3 = products[2].price;

let price = [price_1, price_2, price_3];
document.write(price[0] + " рублей итоговая цена по скидке для первого продукта.<br>");
document.write(price[1] + " рублей итоговая цена по скидке для второго продукта.<br>");
document.write(price[2] + " рублей итоговая цена по скидке для третьего продукта.<br>");