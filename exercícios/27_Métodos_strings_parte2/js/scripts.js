// toLowerCase e toUpperCase

let frase = "Está é a frase que vamos manipular";

// Frase em minusculo == toLowerCase
console.log(frase.toLowerCase());

// Frase em minusculo == toUpperCase
let fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

// trim 
// retira o espaço
let nome = "   Marinho     ";

let nomeTrin = nome.trim();
// com espaço
console.log(nome);
// sem espaço
console.log(nomeTrin);

// split

console.log(frase.split(" "));

let tags = "PHP, Javascript, HTML, CSS";

console.log(tags.split(","));

//lastIndexOf
let fraseDois = "Eu quero a última palavra teste desta frase teste";

console.log(fraseDois.indexOf("teste"));

console.log(fraseDois.lastIndexOf("teste"));

