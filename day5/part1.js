var fs = require('fs');

var start = Date.now();

fs.readFile('./input.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split(/\r?\n/);

    const toBinString = (i) => i.replace(/[B,R]/g, "1").replace(/[F,L]/g, "0");
    const int = (i) => parseInt(i, 2);

    var amount = Math.max(...array.map(toBinString).map(int));

    console.log(`Answer: ${amount}\nTime Elapsed: ${Date.now()-start}ms`);
});