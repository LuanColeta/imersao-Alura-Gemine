function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(campoPesquisa);
    
    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return

     }

     campoPesquisa = campoPesquisa.toLowerCase();
   

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
    
        // se no dado titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2 class="descricao-meta">
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank" class="descricao-meta">Acesse o tibia.com</a>
            </div>
        `

        }

    }

    if (!resultados ){
        resultados = "<p>Nada foi encontrados </p>"
    }

    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
}






