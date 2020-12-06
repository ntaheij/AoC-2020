var fs = require('fs');

var start = Date.now();

fs.readFile('./input.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString();
    const groups = array.replace(/\r\n/g, "\n").split("\n\n");

    const amount = groups
                    .map((group) =>
                    group.split("\n").reduce((prev, answer) => {
                        answer.split("").forEach((a) => prev.add(a));
                        return prev;
                    }, new Set())
                    )
                    .map((answerSet) => Array.from(answerSet).length)
                    .reduce((prev, curr) => prev + curr, 0);

    console.log(`Answer: ${amount}\nTime Elapsed: ${Date.now()-start}ms`);
});