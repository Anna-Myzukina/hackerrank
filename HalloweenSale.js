/*Halloween Sale */

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

// Complete the howManyGames function below.
function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
let n = 0

  if (s >= p) {
    n = parseInt(1 + (p - m) / d)
    let t = n * (2 * p - (n - 1) * d) / 2

    if (s < t) {
      let b = 2 * p + d
      n = (b - Math.sqrt(b * b - 8 * d * s)) / (2 * d)
    } else {
      n += (s - t) / m
    }
  }

  return parseInt(n)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const pdms = readLine().split(' ');

    const p = parseInt(pdms[0], 10);

    const d = parseInt(pdms[1], 10);

    const m = parseInt(pdms[2], 10);

    const s = parseInt(pdms[3], 10);

    let answer = howManyGames(p, d, m, s);

    ws.write(answer + "\n");

    ws.end();
}
