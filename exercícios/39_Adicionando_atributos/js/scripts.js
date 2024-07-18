let titulo = document.querySelector("#titulo");

titulo.setAttribute("Class", "testando-atributo");

console.log(titulo);

//botão 

let botao = document.querySelector("#botão");

botao.setAttribute("disabled", "disabled");

let subtitulo = document.querySelector(".subtitulo");

subtitulo.setAttribute("id", "titulo-2");

// removendo elemento

let lista = document.querySelector("#lista");

lista.removeAttribute("id");