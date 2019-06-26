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

// Complete the happyLadybugs function below.
function happyLadybugs(b) {
    if (!b.includes("_")) { 
    b = b.match(/(.)\1*/g); 
    for (let i = 0; i < b.length; i++) { 
    if (b[i].length < 2) { 
    return "NO"; } } return "YES" } else { b = b.split("").sort().join(""); b = b.match(/(.)\1*/g); for (let j = 0; j < b.length - 1; j++) { if (b[j].length === 1) { return "NO"; } } return "YES" } 

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const n = parseInt(readLine(), 10);

        const b = readLine();

        let result = happyLadybugs(b);

        ws.write(result + "\n");
    }

    ws.end();
}
