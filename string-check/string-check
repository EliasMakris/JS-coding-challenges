
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

    s = Array.from(s);
    var counter = 0;
    var as = 0;
    var remainder = 0;

    for (var j = 0; j < s.length; j++){
        if (s[j] == "a") { counter++;}
    }

    if (counter === 0) { return 0; } else {
        remainder = n % s.length;
        as = Math.trunc(n / s.length) * counter;
        if (remainder == 0) { return as;}

        counter = 0;
        for (var j = 0; j < remainder; j++) {
            if (s[j] == "a") { counter++; }
        } 
        return as + counter;
    }


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
