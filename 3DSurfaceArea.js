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

// Complete the surfaceArea function below.
function surfaceArea(A) {
const nears = [[0,1],[0,-1],[1,0],[-1,0]]
    A = [new Array(A[0].length + 2).fill(0), ...A.map(a => [0, ...a, 0]), new Array(A[0].length + 2).fill(0)];
    let result = 0;
    for (var i = 1; i < A.length - 1; i++) {
        for (var j = 1; j < A[i].length - 1; j++) {
            const hear = A[i][j];
            let area = 2;
            for (var n = 0; n < 4; n++) {
                const near = A[i + nears[n][0]][j + nears[n][1]];
                if (near > hear) continue;
                area += hear - near;
            }
            result += area;
        }
    }
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const HW = readLine().split(' ');

    const H = parseInt(HW[0], 10);

    const W = parseInt(HW[1], 10);

    let A = Array(H);

    for (let i = 0; i < H; i++) {
        A[i] = readLine().split(' ').map(ATemp => parseInt(ATemp, 10));
    }

    let result = surfaceArea(A);

    ws.write(result + "\n");

    ws.end();
}
