/* I use here method  .filter()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

The filter() method creates a new array with all elements 
that pass the test implemented by the provided function.

Example:
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

Метод «arr.filter(callback[, thisArg])» используется для фильтрации массива через функцию.
Он создаёт новый массив, в который войдут только те элементы arr, 
для которых вызов callback(item, i, arr) возвратит true.
item – очередной элемент массива.
i – его номер.
arr – массив, который перебирается.
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

// Complete the angryProfessor function below.
function angryProfessor(k, a) {
  const t = a.filter(i => i <= 0)
  return t.length >= k ? 'NO' : 'YES'
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

        let result = angryProfessor(k, a);

        ws.write(result + "\n");
    }

    ws.end();
}
