//setTimeout
console.log("Antes do setTimeout");
//Essa função só executada depois de dois segundos 
setTimeout(function(){
    console.log("Testando o setTimeout");
}, 2000);

console.log("Depois do setTimeout");

// setInterval fica no loop 

setInterval(function(){
    console.log("Testando setInterval");
}, 1000);
