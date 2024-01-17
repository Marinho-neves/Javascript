var teste = 1;
nome = 'Maria'; //escopo global. Com a declaração sem o "var" não é global

console.log(teste);

teste = 'Marinho';

console.log(teste);

console.log(nome);

//Caracteres especiais usados na declaração de variáveis

var $nome =  'ASD'; // '$' Caracteres especiais
var _nome =  'ASD'; // '_' Caracteres especiais

console.log($nome);
console.log(_nome);

/* 
Não pode declarar variáveis iniciando com o números

var %nome = 'ASD#';

console.log(5nome);
*/

var meuPrimeiroNome = 'Marinho'; //camelCase

console.log(meuPrimeiroNome);

// Outra formas de declarar variáveis

let testando = 10;

const ola = 2;