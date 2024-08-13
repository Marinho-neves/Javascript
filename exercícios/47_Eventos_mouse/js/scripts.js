// Evento mouseover 

let titulo = document.querySelector("#titulo");

console.log(titulo);

titulo.addEventListener("mouseover", function(){
    this.style.backgroundColor = "yellow";
});

titulo.addEventListener("mouseout", function(){

    this.style.backgroundColor = "white";

});

// afetar outro elemento com mouseover

let subtitulo = document.querySelector(".subtitulo");

subtitulo.addEventListener("mouseover", function(){

    let legenda = document.querySelector("#legenda");

    legenda.classList.remove("hide");
});

subtitulo.addEventListener("mouseout", function(){

    let legenda = document.querySelector("#legenda");

    legenda.classList.add("hide");
});
