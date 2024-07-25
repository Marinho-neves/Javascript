//clearTimeout na prática
let x = 0;

let myTimer = setTimeout(function(){
    console.log("0 x é 0")
}, 1500);

x = 5;

if ( x > 0){
    clearTimeout(myTimer);
    console.log("O x passou de 0");
}

//Clear setInterval na prática
let myInterval = setInterval(function(){
    console.log("Imprimindo Interval");
}, 500);

 setTimeout(function(){
    console.log("Não precisamos mais repertir!");
    clearInterval(myInterval);
 },1500);