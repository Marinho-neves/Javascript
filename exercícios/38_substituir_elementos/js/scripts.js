// Criar um elemento

let el = document.createElement("h3");

// nomeando elemento
el.classList = "testando-classe";

//a
let texto = document.createTextNode("Este é o texto do h3"); 

el.appendChild(texto);

console.log(el);

// selecionar o elemneto que quero trocar 
let titulo = document.querySelector("#titulo");

console.log(titulo);

// selecionando o pai do el

let pai = titulo.parentNode;

// trocar os elementos
pai.replaceChild(el,titulo);

