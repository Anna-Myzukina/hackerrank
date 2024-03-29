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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    /*
     * Write your code here.
     */
    var pageNum = 0;
    
    if( n % 2 == 0){
        pageNum = n + 1;
        
    }else {
        pageNum = n;
    }
   var frontPage = parseInt(pageNum/2 - p/2);
   var backPage = parseInt(p / 2);
    
    
   if (frontPage < backPage ){
       return frontPage;
   }else{
       return backPage;
   }
    
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = parseInt(readLine(), 10);

    let result = pageCount(n, p);

    ws.write(result + "\n");

    ws.end();
}
