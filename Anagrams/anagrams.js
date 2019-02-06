
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

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {

    s = Array.from(s);
    var length = s.length;
    var counter = 0;

    for (var j = 1; j < length; j++) {
        var hash = {};
        for (var i = 0; i < length - j +1; i++) {
            var key = s.slice(i, i + j).sort();
            console.log(key);
            if (hash[key]) {
                hash[key] += 1;
            } else { hash[key] = 1; }
        }
        console.log(hash);
        for (var key in hash) {
            var n = hash[key];
            counter += n * (n - 1) / 2 ;     
        }
    }
    return counter;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        ws.write(result + "\n");
    }

    ws.end();
}
