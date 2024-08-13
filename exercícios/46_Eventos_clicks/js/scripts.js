let btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function(){
    
    console.log("Clicou!");
    
    console.log(this);

    this.style.color = "red";
 });
// clicou virus dois

let btn2 = document.querySelector("#btn2");

console.log(btn2);

btn2.addEventListener("click", function(){
    
    console.log("Virus detectado!");
    
    alert("Você foi infectado!");
    
    
}); 

// inserindo no titulo

let titulo = document.querySelector("#titulo");

titulo.addEventListener("click", function(){
    console.log("teste");
    titulo.style.color = "red";
});

//modificando o subtitulo

let subtitulo = document.querySelector(".subtitulo");

subtitulo.addEventListener("click", function(){
    subtitulo.style.display = "none";
});

// click duplo com dblclick

let paragrafo = document.querySelector("#paragrafo");

paragrafo.addEventListener("dblclick", function(){
    alert("Click duplo");
});