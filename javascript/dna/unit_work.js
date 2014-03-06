var work = require("./src/Work.js");
var assert = require('assert');

var test1 = new work.Work("GATTACA", "GATACA");
console.log(test1.control);
console.log(test1.sampler);
test1.align();

for (var j = 0; j < test1.control.length; j++) {
    test1.printAtIndex(j);
}
console.log(test1);

assert.deepEqual(1, 1, ["testing"]);
assert.deepEqual(test1.mutations.length, 1, undefined);

