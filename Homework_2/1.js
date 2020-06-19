'use strict';
/**
 *Функция сложения двух чисел
 * @param {number} a - Первое число, которое будет складываться в функции
 * @param {number} b - Второе число, которое будет складываться в функции
 * @returns {number} - Вернёт число, полученное при сложении двух чисел.
 */
function summa() {
    let a = number_1;
    let b = number_2;

    let result = a + b;
    return result;
}

/**
 *Функция вычитания двух чисел
 * @param {number} a - Первое число, из которого будут вычитать в функции
 * @param {number} b - Второе число, которое будет вычитаться в функции
 * @returns {number} - Вернёт число, полученное при разности двух чисел.
 */
function minus() {
    let a = number_1;
    let b = number_2;

    let result = a - b;
    return result;
}

/**
 *Функция умножения двух чисел
 * @param {number} a - Первое число, которое будет умножаться в функции
 * @param {number} b - Второе число, которое будет умножаться в функции
 * @returns {number} - Вернёт число, полученное при умножении двух чисел.
 */
function multiplication() {
    let a = number_1;
    let b = number_2;

    let result = a * b;
    return result;
}

/**
 *Функция деления двух чисел
 * @param {number} a - Первое число, которое будет делиться в функции
 * @param {number} b - Число, на которое будет делиться первое число в функции
 * @returns {number} - Вернёт число, полученное при делении двух чисел.
 */
function division() {
    let a = number_1;
    let b = number_2;

    let result = a / b;
    return result;
}


let number_1 = parseInt(prompt("Введите первое число"));
let number_2 = parseInt(prompt("Введите второе число"));
summa();
alert("Сумма двух чисел равна: " + summa());
minus();
alert("Разность двух чисел равна: " + minus());
multiplication();
alert("Произведение двух чисел равно: " + multiplication());
division();
alert("Деление двух чисел равно: " + division());