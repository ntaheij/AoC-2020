var fs = require('fs');

var fs = require('fs');

var start = Date.now();

fs.readFile('./input.txt', function(err, data) {
    let array = data.toString().split(/\r?\n/);

    let slope = array.map((item) => {
        return item.split("");
    });
    
    function slide(right, down) {
        let jump = slope[0].length;
        let rowIndex = 0;
        let columnIndex = 0;
        let treeCount = 0;
    
        while (rowIndex < slope.length - 1) {
            let futureChar = slope[rowIndex + down][columnIndex + right];
            if (!futureChar) {
                columnIndex -= jump;
            }
    
            rowIndex += down;
            columnIndex += right;
            let char = slope[rowIndex][columnIndex];
    
            if (char === "#") {
                treeCount++;
            }
        }
        return treeCount;
    }

    let amount = slide(1,1) * slide(3,1) * slide(5,1) * slide(7,1) * slide(1,2);

    console.log(`Answer: ${amount}\nTime Elapsed: ${Date.now()-start}ms`);
});