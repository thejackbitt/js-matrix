// const starterArray = [1,3,6,5,8,12,10,25,20];

const fs = require('fs');
let starterArray = [];
let matrix = [];

function convertToMatrix(n,d) {

    let array1 = [];

    for(o=0;o<(d);o++) {
        // console.log("Creating the " + (o+1) + " part of the array out of " + (d));

        for(i=0;i<(n);i++) {
            array1.unshift(starterArray.shift());
        }

        // console.log("Reversing...");
        // array1.reverse();
        // console.log("Adding to matrix...");
        matrix.unshift(array1);
        // console.log("Clearing array...");
        array1 = [];
    }

    // matrix.reverse();
    console.log("Result:")
    console.log(matrix);

}

try {
    const source = fs.readFileSync('source.txt', 'utf8');
    const lines = source.split(`\n`);

    for (i=0;i<(lines.length);i++) {
        starterArray.unshift(parseInt(lines[i],10));
    }

} catch(error) {
    console.log(`Ruh roh, Raggy!  R'error!:`, error.stack);
}

convertToMatrix(3,3);