var fs = require('fs');

var start = Date.now();

fs.readFile('input.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split(/\r?\n/);
    var data = array.map(el => {
        let a = el[0]
        let b = parseInt(el.split('').slice(1).join(''))
        return[a,b];
    });


    let facing = 'E';
    let x = 0;
    let y = 0;
    let xW = 10;
    let yW = -1;

    function runScript(dir,nb){
        switch(dir){
            case 'N':
                y-=nb;
                break;
            case 'S':
               y+=nb;
                break;
            case 'E':
                x+=nb;
                break;
            case 'W':
               x-=nb;
                break;
            case 'L':
                    facing == "E" ? facing = nb==90 ? "N" : nb==180 ? "W" : nb==270 ? "S" : undefined
                    :
                    facing == "W" ? facing = nb==90 ? "S" : nb==180 ? "E" : nb==270? "N" : undefined
                    :
                    facing =="N" ? facing = nb==90 ? "W" : nb==180 ? "S" : nb==270? "E" : undefined
                    :
                    facing = nb==90 ? "E" : nb==180 ? "N" : nb==270 ? "W": undefined
                break;
            case 'R':
                    facing == "E" ?  facing = nb==90 ? "S" : nb==180 ? "W" :nb==270 ? "N": undefined
                    :
                    facing == "W" ? facing = nb==90 ? "N" : nb==180 ? "E" :nb==270 ? "S": undefined
                    :
                    facing == "N" ? facing = nb==90 ? "E" : nb==180 ? "S" :nb==270 ? "W": undefined
                    :
                    facing = nb==90 ? "W" : nb==180 ? "N" :nb==270 ? "E": undefined
                break;
            case "F":
                    facing == "E" ? x+=nb : facing == "W" ?  x-=nb : facing == "N" ? y-=nb :  y+=nb
        }
    }
    
    data.forEach(el=>{
        let [dir,nb] = el
        runScript(dir,nb);
    });
    var amount = parseInt(Math.abs(x)+Math.abs(y));

    console.log(`Answer: ${amount}\nTime Elapsed: ${Date.now()-start}ms`);
});