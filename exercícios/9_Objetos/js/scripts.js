var obj = { //Declaração de Objeto
    nome:"Marinho",
    idade: 29,
    profissao: "Programador",
    estatrabalahndo: true,
};
console.log(obj);
console.log(typeof obj);

// Acessando o obejto: nome, idade, profissão

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

//Pode ser utilizado como uma váriavel

console.log("O meu nome é " + obj.nome);

//mudando o valor da váriavel

obj.nome = "Maria";

console.log(obj.nome);
console.log(obj);

// Criando um objeto

obj.graduacao = true;

console.log(obj);