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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    var q = queries;
    var len = q.length;
    var t = new Array(3); 
    var max = 0;
    var val = 0;
    var a = new Array(n);

    for (var k = 0; k < len; k++){
        t = q[k];
        
        if (a[t[0] - 1]) { a[t[0] - 1] += t[2]; }
        else {
            a[t[0] - 1] = t[2];
        }
        if (a[t[1]]) { a[t[1]] -= t[2]; }
        else {
            a[t[1]] = -t[2];
        }
    }
    a = a.filter(Boolean);
    //console.log(a);
    n = a.length;
     
    for (var i = 0; i < n; i++) {       
        val += a[i];
        if (val > max) { max = val; }
    }
    console.log('a last', val); // should be zero

    return max;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}
