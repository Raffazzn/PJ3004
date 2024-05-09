function alterarPagina(){
    let fundo = document.querySelector("body");
    let nav = document.querySelector("nav")

    if (fundo.classList.contains("box-escuro") || nav.classList.contains("lista2"))
    {
        fundo.classList.remove("box-escuro");

        nav.addEventListener('click',() =>
    {
        let list = document.querySelectorAll(".lista");

        for (let i = 0; i < list.length; i++) {
            const elemento = list[i];
            elemento.style.color = "#FFF";
        }
    }
)

    }
    else{
        fundo.classList.add("box-escuro");
    }

}