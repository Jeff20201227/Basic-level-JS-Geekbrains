'use strict';
/**
 *Функция сложения двух чисел
 * @param {number} a - Первое число, которое будет складываться в функции
 * @param {number} b - Второе число, которое будет складываться в функции
 * @returns {number} - Вернёт число, полученное при сложении двух чисел.
 */
function summa(a, b) {
    return a + b;
}

/**
 *Функция вычитания двух чисел
 * @param {number} a - Первое число, из которого будут вычитать в функции
 * @param {number} b - Второе число, которое будет вычитаться в функции
 * @returns {number} - Вернёт число, полученное при разности двух чисел.
 */
function minus(a, b) {
    return a - b;
}

/**
 *Функция умножения двух чисел
 * @param {number} a - Первое число, которое будет умножаться в функции
 * @param {number} b - Второе число, которое будет умножаться в функции
 * @returns {number} - Вернёт число, полученное при умножении двух чисел.
 */
function multiplication(a, b) {
    return a * b;
}

/**
 *Функция деления двух чисел
 * @param {number} a - Первое число, которое будет делиться в функции
 * @param {number} b - Число, на которое будет делиться первое число в функции
 * @returns {number} - Вернёт число, полученное при делении двух чисел.
 */
function division(a, b) {
    return a / b;
}


let a = parseInt(prompt("Введите первое число"));
let b = parseInt(prompt("Введите второе число"));
let c = prompt("Введите одно из математических действий: " + " '+' " + " '-' " + " '*' " + " '/'.")

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return summa(arg1, arg2);
        case "-":
            return minus(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        default:
            throw new Error("Операция " + operation + " не предусмотрена.");
    }
}

alert(mathOperation(a, b, c));
/*alert("Сумма двух чисел равна: " + mathOperation(a, b, "+"));
alert("Разность двух чисел равна: " + mathOperation(a, b, "-"));
alert("Произведение двух чисел равно: " + mathOperation(a, b, "*"));
alert("Деление двух чисел равно: " + mathOperation(a, b, ""));*/