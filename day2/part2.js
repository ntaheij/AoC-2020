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
        var p1 = strength[i].split('-')[0];
        var p2 = strength[i].split('-')[1];

        var splitt = pw.split('');

        if((splitt[p1-1] == ltr) && (splitt[p2-1] != ltr)) {
            amount = amount+1;
        } else if((splitt[p1-1] != ltr) && (splitt[p2-1] == ltr)) {
            amount = amount+1;
        }
    }

    console.log(`Answer: ${amount}\nTime Elapsed: ${Date.now()-start}ms`);
});