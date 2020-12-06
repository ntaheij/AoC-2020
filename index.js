const fs = require('fs');

var exec = require('child_process').execSync;

var days = 6;

var start = Date.now();

for(i = 1; i < days+1; i++) {

    console.log(`-------- Day ${i} - Part 1 --------`);
    var a = exec(`cd ./day${i} && node part1.js`,
    function (error, stdout, stderr) {
        console.log(stdout + "\n");
        if (error !== null) {
        console.log('exec error: ' + error);
        }
    });

    console.log(a.toString("utf8"));

    console.log(`-------- Day ${i} - Part 2 --------`);
    var b = exec(`cd ./day${i} && node part2.js`,
    function (error, stdout, stderr) {
        console.log(stdout + "\n");
        if (error !== null) {
        console.log('exec error: ' + error);
        }
    });

    console.log(b.toString("utf8"));

}

console.log(`Total Execution Time: ${Date.now()-start}ms`);

