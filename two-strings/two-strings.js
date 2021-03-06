
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

// Complete the twoStrings function below.
function twoStrings(s1, s2) {

    var ab = "abcdefghijklmnopqrstuvwxyz";
    ab = Array.from(ab);
    s1 = Array.from(s1);
    s2 = Array.from(s2);
    var string1 = s1.join("");
    var string2 = s2.join("");

    if (s1.length === 0 || s2.length === 0) { return "NO";}

    for (var i = 0; i < ab.length; i++){
        if (string1.includes(ab[i])) { continue; }
        else { ab.splice(i, 1); i--; }  
    }
    console.log("s2 is tested for",ab);
    for (var j = 0; j < ab.length; j++){
        if (string2.includes(ab[j])) { return "YES"; }
        else { continue; }  
    }
    return "NO";


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();

        let result = twoStrings(s1, s2);

        ws.write(result + "\n");
    }

    ws.end();
}
