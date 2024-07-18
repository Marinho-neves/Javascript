// Criar elementos 
let el = document.createElement('div');

el.classList = "div-criada";

console.log(el);

// Acessar o container

let container = document.querySelector("#container");
 
//inserindo elemento filho 
container.appendChild(el);

//inser Before - insere antes 

let el2 = document.createElement("div");

el2.classList = "div - before";

let el3 = document.querySelector("#container .div-criada");

console.log(el3);

container.insertBefore(el2, el3);