/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
    
    
     selecionado
    
    
    
    
*/

// - passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")
// - passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // - passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // - passo 4 - marcar o botão clicado como se estivesse
        marcarBotaoSelecionado(botao);

        // - passo 5 - esconder a imagem anteriormente selecionada
        esconderImagemAtiva();

        // - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mostarImagemDeFundo(indice);

        // - passo 7 - esconder a informação do dragão anteriormente selecionado
        esconderInformacoesAtivas();

        // - passo 8 - mostrar a informação do dragão referente ao botão clicado
        mostrarInformacoes(indice);
    })
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
