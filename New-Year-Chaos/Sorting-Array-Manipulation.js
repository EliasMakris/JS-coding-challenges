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
    //var a = new Array(n);
    //for (var i = 0; i < n; i++) { a[i] = 0;}
    var len = queries.length;
    var temp = new Array(3); 
    var tempNext = new Array(3);
    var pushed = new Array(3);
    var ind = 0;

    function sortem(arr) {
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            var small = 10 ** 7;
            for (var j = i; j < len; j++) {
                temp = arr[j];
                if (temp[0] < small) { small = temp[0]; ind = j; }
            }
            [arr[i], arr[ind]] = [arr[ind], arr[i]];

        }
        return arr;
    }


    for (var i = 0; i < queries.length; i++){
        queries = sortem(queries);
        temp = queries[i];

        if (temp[0] === temp[1]) { continue;}
        var j = i + 1; 
            tempNext = queries[j];
            if (tempNext[0] > temp[1]) {
                continue;
            }
            //if (tempNext[0] == temp[0] && tempNext[1] == temp[1]) { continue; }
            if (temp[1] < tempNext[1]) {
                queries[j] = [tempNext[0],temp[1],tempNext[2]+temp[2]];
                pushed = [temp[1] + 1, tempNext[1], tempNext[2]];
                queries.push(pushed);
                queries.splice(i, 1);
                i--;
                continue;

            } else if (tempNext[1] === temp[1]) {
                queries[j] = [tempNext[0], tempNext[1], tempNext[2] + temp[2]];
                queries.splice(i, 1);
                i--;
                continue;
            } else if (temp[1] > tempNext[1]) {
                queries[j] = [tempNext[0], tempNext[1], tempNext[2] + temp[2]];
                pushed = [tempNext[1]+1, temp[1], temp[2] ];
                queries.push(pushed);
                queries.splice(i, 1);
                i--;
                continue;
            }
                
            

    }

    queries = sortem(queries);
    //console.log(queries.length);
    //console.log(queries);
    var len = queries.length;
    var b = new Array(len);
    for (var k = 0; k < len; k++){   
        b[k] = queries[k][2];
    }
    return Math.max(...b);

 /* First Solution - Slow
     for (var j = 1; j < len; j++){
        temp = queries[j];
        var s = temp[0]-1 ;
        var e = temp[1]-1 ;
        var v = temp[2];        

        for (var k = s; k <= e; k++){
            a[k] += v;
        }
    }

    //a = a.filter(Boolean);
    return Math.max(...a);
*/

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
