var work = require("./src/Work.js");
var fs = require("fs");

var file1 = "chicken.dna.1.fasta";
var file2 = "chicken.dna.2.fasta";
var test1, seq_x, seq_y;

var processDNA = function() {

   test1 = new work.Work(seq_x, seq_y);

   test1.name = file1 + ":" + file2;
   console.log(test1.control);
   console.log(test1.sampler);
   test1.align();

   for (var j = 0; j < test1.control.length; j++) {
       test1.printAtIndex(j);
   }
   console.log(test1.report());
} 

fs.readFile("./data/" + file1, "utf8", function read(err, data) {
    if (err) { throw err; }
    seq_x = data;
    seq_x = seq_x.substring(seq_x.indexOf('\n'), seq_x.length).replace(/(\r\n|\n|\r)/gm,"");
});

fs.readFile("./data/" + file2, "utf8", function read(err, data) {
    if (err) { throw err; }
    seq_y = data;
    seq_y = seq_y.substring(seq_y.indexOf('\n'), seq_y.length).replace(/(\r\n|\n|\r)/gm,"");
});

setTimeout(processDNA, 1000);

