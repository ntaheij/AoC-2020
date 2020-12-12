var fs = require('fs');

var start = Date.now();



fs.readFile('input.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split(/\r?\n/);

    var bagRules = {};

    var data = array.forEach(x => {
        x = x.split("bags").join("");
        x = x.split("bag").join("");

        var split = x.split("contain");
        var containSplit = split[0];
        var bagsSplit = split[1].replace(".", "").split(",");
        var bagContents = [];

        bagsSplit.forEach(x => {
            var howMany = parseInt(x.trim().substring(0, 1));
            for (let i = 0; i < howMany; i++) {
                bagContents.push((x.trim().substring(2, x.length)));
            }
        });
        bagRules[containSplit.trim()] = bagContents;
    });

    function howManyBags(text) {
        var localBagRules = bagRules;
        var colours = findGold(localBagRules);
    
        return iterator(localBagRules, colours).length;
    }
    
    function iterator(bagRules, colours) {
        var localBagLength = colours.length;
    
        while (true) {
            colours = findColour(bagRules, colours)
            if (colours.length === localBagLength) {
                return colours;
            } else {
                localBagLength = colours.length;
            }
    
        }
    }
    
    function findGold(bagRules) {
        var hasGold = [];
        for (let bagRule in bagRules) {
            if (bagRules[bagRule].includes("shiny gold")) {
                hasGold.push(bagRule);
            }
        }
        return hasGold;
    }
    
    function findColour(bagRules, colours) {
        colours.forEach(colour => {
            for (let bagRule in bagRules) {
                if (colours.indexOf(bagRule) === -1 && bagRules[bagRule].includes(colour)) {
                    colours.push(bagRule);
                }
            }
        });
        return colours;
    }

    var amount = howManyBags();

    console.log(`Answer: ${amount}\nTime Elapsed: ${Date.now()-start}ms`);
});