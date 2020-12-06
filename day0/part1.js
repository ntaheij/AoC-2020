var fs = require('fs');

var start = Date.now();

fs.readFile('input.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString();
    

    var amount = 0;

    console.log(`Answer: ${amount}\nTime Elapsed: ${Date.now()-start}ms`);
});