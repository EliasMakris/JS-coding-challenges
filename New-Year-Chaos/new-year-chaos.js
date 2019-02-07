'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
    var length = q.length;
    var counter = 0;
    var temp = 0;
    var abuse = 0;

    for (var i = 0; i <  length ; i++){
        if (q[i] < i + 1) {
            temp = q[i];
            abuse = i + 1 - q[i];
            //console.log(i, 'tmp', temp, 'ab', abuse);
            for (var j = 0; j < abuse; j++) {
                [q[i - j], q[i - 1 - j]] = [q[i - 1 - j], q[i - j]];
                counter++;
        
            }
            i = temp - 1;
        
        } else if (q[i] > i + 3) { console.log("Too chaotic"); return; }
        else { continue; }
        
    }
    console.log(counter);


}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
