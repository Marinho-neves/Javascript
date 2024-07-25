function exibir(num){
    console.log( "A operação resultou em: "+ num);
}

function soma (a,b, callback){
    let op = a + b;
    callback(op);
}

//outra forma 
soma(10, 15, exibir);

function multiplicacao(a,b, cb){
    let op = a * b;
    cb(op);
}
//outra forma 
multiplicacao(10, 15, exibir);