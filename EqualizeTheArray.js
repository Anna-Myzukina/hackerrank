/*https://learn.javascript.ru/array-iteration
Метод «arr.reduce(callback[, initialValue])» используется для последовательной обработки каждого 
элемента массива с сохранением промежуточного результата.

Это один из самых сложных методов для работы с массивами. Но его стоит освоить, потому что временами
с его помощью можно в несколько строк решить задачу, которая иначе потребовала бы в разы больше места и времени.

Метод reduce используется для вычисления на основе массива какого-либо единого значения, иначе говорят
«для свёртки массива». Чуть далее мы разберём пример для вычисления суммы.

Он применяет функцию callback по очереди к каждому элементу массива слева направо, сохраняя при этом промежуточный результат.

Аргументы функции callback(previousValue, currentItem, index, arr):

previousValue – последний результат вызова функции, он же «промежуточный результат».
currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.
index – номер текущего элемента.
arr – обрабатываемый массив.
Кроме callback, методу можно передать «начальное значение» – аргумент initialValue.
Если он есть, то на первом вызове значение previousValue будет равно initialValue,
а если у reduce нет второго аргумента, то оно равно первому элементу массива, а перебор начинается со второго.
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the equalizeArray function below.
function equalizeArray(arr) {
 
    let countArr = Object.values(
        arr.reduce((objCount, num) => {
            objCount[num] = !objCount[num] ? 1 : objCount[num] + 1;
            return objCount;
        }, {})
    );
    return arr.length - Math.max(...countArr);


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = equalizeArray(arr);

    ws.write(result + "\n");

    ws.end();
}
