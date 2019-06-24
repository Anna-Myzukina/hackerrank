/*
You are given a square map as a matrix of integer strings. 
Each cell of the map has a value denoting its depth. 
We will call a cell of the map a cavity if and only if this cell is not on the border
of the map and each cell adjacent to it has strictly smaller depth. 
Two cells are adjacent if they have a common side, or edge.

Find all the cavities on the map and replace their depths with the uppercase character X.

For example, given a matrix:

989
191
111
You should return:

989
1X1
111
The center cell was deeper than those on its edges: [8,1,1,1]. 
The deep cells in the top two corners don't share an edge with the center cell.

Function Description

Complete the cavityMap function in the editor below. 
It should return an array of strings, each representing a line of the completed map.

cavityMap has the following parameter(s):

grid: an array of strings, each representing a row of the grid
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

// Complete the cavityMap function below.

function cavityMap(grid) {
    // Turn grid into a 2D array
    const twoDArr = grid.map(ele => ele.split(''));
    
    // Loop through 2D array checking values against neighbours
    for(let i = 1; i < twoDArr.length - 1; i++) {
        for(let j = 1; j < twoDArr[i].length - 1; j++) {
            if(horizontalCheck(twoDArr, i, j) && verticalCheck(twoDArr, i, j)) {
              twoDArr[i][j] = 'X'; 
            }
        }
    }
    const newGrid = twoDArr.map(ele => ele.join(''));
    return newGrid;
}

// Check against horizontal values
function horizontalCheck(arr, column, row) {
    if(arr[column][row] > arr[column][row - 1] && arr[column][row] > arr[column][row + 1]) {
        return true;
    } else {
        return false;
    }
}

// Check against vertical values
function verticalCheck(arr, column, row) {
    if(arr[column][row] > arr[column - 1][row] && arr[column][row] > arr[column + 1][row]) {
        return true;
    } else {
        return false;
    }
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    let result = cavityMap(grid);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
