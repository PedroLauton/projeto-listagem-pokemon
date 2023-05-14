const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagembotaotrocedetema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    
    const modoEscuroestaAtivo = body.classList.contains("modo-escuro")
    
    body.classList.toggle("modo-escuro");

    if(modoEscuroestaAtivo)
    {
        imagembotaotrocedetema.setAttribute("src", "./src/imagens/sun.png");
    }
    else
    {
        imagembotaotrocedetema.setAttribute("src", "./src/imagens/moon.png");
    }
});

