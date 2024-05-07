function alterarPagina(){
    let fundo = document.querySelector("body");
    if (caixa.classList.contains("box-escuro")){
        caixa.classList.remove("box-escuro");
    }
    else{
        caixa.classList.add("box-escuro");
    }
}