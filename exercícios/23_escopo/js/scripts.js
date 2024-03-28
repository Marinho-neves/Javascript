var x = 1;
var y = 3;
console.log(x,y);

function teste(){

    var z = 0;

    console.log(z);
    console.log(x);
}
teste();

//variável local não funciona fora do escopo
//console.log(z);

function testando(){
    var z = 5;

    console.log(z);
}
testando();

if(true){
    
    var p = 1;

}
console.log(p);