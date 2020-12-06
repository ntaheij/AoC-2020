var fs = require('fs');

var start = Date.now();

fs.readFile('./input.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split(/\r?\n/);
    var strength = [], letter = [], password = [];

    array.forEach((i) => {
        var tmp = i.toString().split(' ');

        strength.push(tmp[0]);
        letter.push(tmp[1].split('')[0]);
        password.push(tmp[2]);
    });

    var amount = 0;

    for(var i =0; i<password.length; i=i+1) {
        var pw = password[i];
        var ltr = letter[i];
        var min = strength[i].split('-')[0];
        var max = strength[i].split('-')[1];

        var curr = 0;

        var splitt = pw.split('').forEach((o) => {
            if(o == ltr) {
                curr = curr+1;
            }
        });

        if(curr >= min && curr <= max) {
            amount = amount+1;
        }
    }
    
    console.log(`Answer: ${amount}\nTime Elapsed: ${Date.now()-start}ms`);
});