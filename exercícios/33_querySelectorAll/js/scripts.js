
let itensClasse = document.getElementsByClassName('item');

console.log(itensClasse);

// querySelectorAll
let itensQuery = document.querySelectorAll('.lista2 li');

console.log(itensQuery);

// itens da primeira lista 
let itensQuery2 = document.querySelectorAll('.lista .item');

console.log(itensQuery2);

//querySelector selecionando um unico elelemento
let lista = document.querySelector('.lista');

console.log(lista);

//mesma coisa só de outra forma
let primeiraLista = document.querySelector('ul');

console.log(primeiraLista);

//selecionando o span 
let span = document.querySelector('#paragrafo span');

console.log(span);
