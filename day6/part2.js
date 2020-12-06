var fs = require('fs');

var start = Date.now();

fs.readFile('./input.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString();
    const groups = array.replace(/\r\n/g, "\n").split("\n\n");

    const amount = groups
                    .map((group) => group.split("\n"))
                    .map(
                        (groupAns) =>
                        Array.from(
                            new Set(
                            groupAns.reduce(
                                (prevAll, currAns) => [...prevAll, ...currAns.split("")],
                                []
                            )
                            )
                        )
                            .map((answer) => groupAns.every((ans) => ans.includes(answer)))
                            .filter(Boolean).length
                    )
                    .reduce((prev, curr) => prev + curr, 0);

    console.log(`Answer: ${amount}\nTime Elapsed: ${Date.now()-start}ms`);
});