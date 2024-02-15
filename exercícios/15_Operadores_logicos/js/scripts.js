var idade = 17;
var nome = "João";

if(idade == 16 && nome == "João"){
    console.log("O João pode entrar na aula de esgrima");
}else{
    console.log("Este não é o joão");
}
if(1 == 1 && 3 > 2 && true ){
    console.log("Passou!");
}
/* Isolando óperações  com parenteses*/

if((1 == 1 && 3 > 3) && true ){
    console.log("Passou!");
}else if(nome === "João" && idade >= 14 ){
    console.log("Aqui passou!");
}