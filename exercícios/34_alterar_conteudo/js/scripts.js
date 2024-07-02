// selecionar elemento
let titulo = document.querySelector('#titulo');

// innerHTML
titulo.innerHTML = 'Testando alteração do titulo';

// textContent -> mais utilizao, recomendado e performático 
let subtitulo = document.querySelector(".subtitulo");

subtitulo.textContent = 'Alterando com textcontent';