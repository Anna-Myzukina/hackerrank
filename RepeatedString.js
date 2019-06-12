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

// Complete the repeatedString function below.
function repeatedString(s, n) {
     if (s.length === 1) return s === 'a' ? n : 0;
    let numLetter1 =
        s.split('').filter(letter => letter === 'a').length *
        Math.floor(n / s.length);
    let slice = s.slice(0, n % s.length);
    if (slice.length === 1) return slice === 'a' ? numLetter1 + 1 : numLetter1;
    return numLetter1 + slice.split('').filter(letter => letter === 'a').length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
