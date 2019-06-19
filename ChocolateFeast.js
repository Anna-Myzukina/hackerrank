/*Chocolate Feast
Problem Statement
Little Bob loves chocolate, and he goes to a store with $N in his pocket. 
The price of each chocolate is $C. The store offers a discount: for every M wrappers he gives to the store, 
he gets one chocolate for free. How many chocolates does Bob get to eat?

Input Format:
The first line contains the number of test cases, T. T lines follow, each of which contains three integers, N, C, and M.

Output Format:
Print the total number of chocolates Bob eats.

Constraints:
1≤T≤1000
2≤N≤105
1≤C≤N
2≤M≤N
Sample input
3
10 2 5
12 4 4
6 2 2
Sample Output
6
3
5
Explanation
In the first case, he can buy 5 chocolates with $10 and exchange the 5 wrappers to get one more chocolate. 
Thus, the total number of chocolates is 6.

In the second case, he can buy 3 chocolates for $12. However, it takes 4 wrappers to get one more chocolate. 
He can't avail the offer and hence the total number of chocolates remains 3.

In the third case, he can buy 3 chocolates for $6. 
Now he can exchange 2 of the 3 wrappers and get 1 additional piece of chocolate. 
Now he can use his 1 unused wrapper and the 1 wrapper of the new piece of chocolate to get one 
more piece of chocolate. 
So the total is 5.*/


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

// Complete the chocolateFeast function below.
function chocolateFeast(n, c, m) {
        var count = 0;
        var temp_count = Math.floor( n / c );
        while( true ) {
          var free_choco = temp_count + (count % m);
          count += temp_count;

          if( free_choco < m ) {
              break;
          }

          temp_count = Math.floor(free_choco / m);
      }

      return count;
  

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const ncm = readLine().split(' ');

        const n = parseInt(ncm[0], 10);

        const c = parseInt(ncm[1], 10);

        const m = parseInt(ncm[2], 10);

        let result = chocolateFeast(n, c, m);

        ws.write(result + "\n");
    }

    ws.end();
}
