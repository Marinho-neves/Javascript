let pessoa = {
    nome: "Marinho",
    idade: 28,
falar: function(){
    console.log("Olá, tudo bem?");
},
soma: function(a,b){
    return a + b;
}

};

console.log(pessoa.idade);

pessoa.falar();

let soma = pessoa.soma(2,2);

console.log(soma);