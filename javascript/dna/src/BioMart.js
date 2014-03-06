/* BioMart.js - command line tool to use the Work.js api 
 * uses argv[2] and argv[3] for id strings of the BioMart api.
 */
var http = require("http");
var urlOPTIONS = "?content-type=text/x-fasta;type=cds";
var urlSEQBYID = "/sequence/id";

if (process.argv.length < 3) {
    // Requires to args for the 2 compared dna strings
    console.log("!TOO FEW ARGS! USAGE: node BioMart.js id");
    process.exit(1);
}

var options = {
    host: "beta.rest.ensembl.org",
    port: 80,
}
options["path"] = urlSEQBYID + process.argv[2] + urlOPTIONS;

var req = http.get(options, function(response) {
    // handle the response
    var res_data = "";
    response.on("data", function(chunk) {
        res_data += chunk;
    });
    response.on('end', function() {
        console.log(res_data);
    });
});

req.on('error', function(err) {
    console.log("Request error: " + err.message);
});

