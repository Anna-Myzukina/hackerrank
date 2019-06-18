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

// Complete the timeInWords function below.
function timeInWords(h, m) {
  let numbers = [
    'zero',
    'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eightteen', 'nineteen', 'twenty',
    'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five',
    'twenty six', 'twenty seven', 'twenty eight', 'twenty nine'
  ]

  if (m === 0) {
    return numbers[h] + " o' clock"
  }

  let result = ''

  if (m % 30 === 0) {
    result += 'half'
  } else if (m % 15 === 0) {
    result += 'quarter'
  } else {
    let minutes = m < 30 ? numbers[m] : numbers[60 - m]
    result += minutes

    result += m % 15 === 1 ? ' minute' : ' minutes'
  }

  if (m < 31) {
    result += ' past '
  } else {
    result += ' to '
    h++
  }

  result += numbers[h]

  return result

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let result = timeInWords(h, m);

    ws.write(result + "\n");

    ws.end();
}
