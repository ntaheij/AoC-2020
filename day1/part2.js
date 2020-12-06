var fs = require('fs');

var start = Date.now();

fs.readFile('./input.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split(/\r?\n/);
    for(i in array) {
        for(b in array) {
            for(c in array) {
                if(Number(array[i])+Number(array[b])+Number(array[c]) == 2020) {
                    var amount = Number(array[i])*Number(array[b])*Number(array[c]);

                    return console.log(`Answer: ${amount}\nTime Elapsed: ${Date.now()-start}ms`);
                }
            }
        }
    }
});

