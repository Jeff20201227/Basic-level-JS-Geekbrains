"use strict"

for (let count = 0; count <= 10; count++) {
    if (count == 0) {
        console.log(count + " это Ноль");
    } else if (count % 2 == 1) {
        console.log(count + " нечетное число");
    } else {
        console.log(count + " чётное число");
    }
}