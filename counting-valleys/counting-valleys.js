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

// Complete the countingValleys function below.
function countingValleys(n, s) {

    var s = Array.from(s);
    var ar = [];
    for (var i = 0; i < s.length; i++){
        if (s[i] == "U") { ar[i] = 1; }
        else if (s[i] == "D") { ar[i] = -1;}
    } 
    console.log(ar);
    var counter = 0;
    var valleys = 0;

    for (var j = 0; j < ar.length; j++){
        counter += ar[j];
        if (counter === 0 && ar[j] === 1) { valleys++;}
    }

    return valleys;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
