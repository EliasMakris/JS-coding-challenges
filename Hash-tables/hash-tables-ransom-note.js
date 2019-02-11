'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {

    if (magazine.length < note.length) { return console.log("No"); }

    for (var i = 0; i < note.length; i++){
        var word = note[i];
        for (var j = 0; j < magazine.length; j++) {
            if (magazine[j] === word) {
                magazine.splice(j, 1);
                //console.log(word);
                break;
            }
            else if (magazine[j] != word && j === magazine.length-1)
            { return console.log("No"); }
            else { continue; }
        }
        if (magazine.length === 0) { return console.log("Yes"); }
        
            
    }
    return console.log("Yes");




}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}
