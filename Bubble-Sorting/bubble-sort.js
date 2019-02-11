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

// Complete the countSwaps function below.
function countSwaps(a) {
    var counter = 0;
    var temp = 0;
    var len = a.length;

    for (var i = 0; i < len; i++){
        for (var j = 0; j < len - 1; j++){
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                counter++;
            }
        }
        if (counter === temp) { break;}
        temp = counter;
    }
    console.log('Array is sorted in', counter, 'swaps.');
    console.log('First Element:', a[0]);
    console.log('Last Element:', a[len-1]);


}

function main() {
    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}
