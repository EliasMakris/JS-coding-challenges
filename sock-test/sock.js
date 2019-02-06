
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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {

    var pairs = 0;

    //loop for sock1
    for (var i = 0; i < ar.length; i++) {

        var sock1 = ar[i];
        //console.log('i', i, sock1);
        
        //loop for sock2
        for (var j = i+1; j < ar.length; j++) {
            var sock2 = ar[j];
            //console.log('j', j, sock2);

            if (sock2 === sock1) {
                ar.splice(i, 1);
                ar.splice(j - 1, 1);
                pairs ++;
                i--;
                break;

            } else { continue;}
        }
    }
    return pairs;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
