/* CompTool.js - command line tool to use the Work.js api 
 * uses argv[2] and argv[3] for strings of the seqs.
 */
var work = require("./Work.js");

process.argv.forEach(function(val, index, array) {
//  console.log(index + ': ' + val);
});

if (process.argv.length < 4) {
    // Requires to args for the 2 compared dna strings
    console.log("!TOO FEW ARGS! USAGE: node BioTool.js dnaString1 dnaString2");
    process.exit(1);
}

console.log("------- Starting test1 ---------");

var test1 = new work.Work(process.argv[2], process.argv[3]);

console.log(test1.control);
console.log(test1.sampler);
test1.align();

for (var j = 0; j < test1.control.length; j++) {
    test1.printAtIndex(j);
}

console.log(test1);

