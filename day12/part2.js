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


    let x = 0;
    let y = 0;
    let xW = 10;
    let yW = -1;

    function runScript(dir,nb) {
        let saveX = xW;
        let saveY = yW;
        let diffX = Math.abs(x-xW);
        let diffY = Math.abs(y-yW);
        switch(dir){
            case 'N':
                yW-=nb;
                break;
            case 'S':
                yW+=nb;
                break;
            case 'E':
                xW+=nb;
                break;
            case 'W':
                xW-=nb;
                break;
            case 'L':
                    if(saveX>x){
                        nb==90 ? yW = (y-diffX) : nb==180 ? xW = (x-diffX) : nb==270 ? yW = (y+diffX) : undefined
                    }else{
                        nb==90 ? yW = (y+diffX) : nb==180 ? xW = (x+diffX) : nb==270 ? yW = (y-diffX) : undefined
                    }
                    if(saveY>y){
                        nb==90 ? xW = (x+diffY) : nb==180 ? yW = (y-diffY) : nb==270 ? xW = (x-diffY) : undefined
                    }else{
                        nb==90 ? xW = (x-diffY) : nb==180 ? yW = (y+diffY) : nb==270 ? xW = (x+diffY) : undefined
                    }
                break;
            case 'R':
                    if(saveX>x){
                        nb==90 ? yW = (y+diffX) : nb==180 ? xW = (x-diffX) : nb==270 ? yW = (y-diffX) : undefined
                    }else{
                        nb==90 ? yW = (y-diffX) : nb==180 ? xW = (x+diffX) : nb==270 ? yW = (y+diffX) : undefined
                    }
                    if(saveY>y){
                        nb==90 ? xW = (x-diffY) : nb==180 ? yW = (y-diffY) : nb==270 ? xW = (x+diffY) : undefined
                    }else{
                        nb==90 ? xW = (x+diffY) : nb==180 ? yW = (y+diffY) : nb==270 ? xW = (x-diffY) : undefined
                    }                    
                break;
            case "F":
                    xW>x?(x+=(nb*diffX),xW = (x+diffX)) : (x-=nb*diffX,xW = (x-diffX))
                    yW>y?(y+=(nb*diffY),yW = (y+diffY)) : ( y-=nb*diffY, yW=(y-diffY))
        }
    }

    data.forEach(el=>{
        let [dir,nb] = el
        runScript(dir,nb)
    })

    var amount = parseInt(Math.abs(x)+Math.abs(y));

    console.log(`Answer: ${amount}\nTime Elapsed: ${Date.now()-start}ms`);
});