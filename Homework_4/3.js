'use strict';


/**
 * Функция разбивает число по разрядам и возвращает объект с записанными разрядами числа.
 * @param {num}  Целое число в диапазоне [0, 999], которое разобьется на разряды.
 * @returns {} Объект с разрядами числа или пустой объект в случае ошибки.
 */

function getNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Значение аргумента должно быть целым числом в диапазоне от 0 до 999.');
        return {};
    }

    return {
        hundereds: Math.floor(num / 100), //сотни
        tens: Math.floor(num / 10) % 10, //десятки
        units: num % 10, //единицы
    };
}

let num = +prompt("Введите число от 0 до 999.");
console.log(getNumber(num));