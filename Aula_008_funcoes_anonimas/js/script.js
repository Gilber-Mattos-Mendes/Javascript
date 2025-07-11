// Define uma função de saudação que recebe um nome como parâmetro
// Esta função retorna uma mensagem de boas-vindas personalizada
const saudacao = function (nome) {
    return `Olá, ${nome}! Seja bem-vindo(a).`;
};

// Esta função exibe uma mensagem no elemento de resultado da página
// Recebe a mensagem como parâmetro e a insere no HTML
const mostrarResultado = (mensagem) => {
    // Obtém o elemento do DOM com ID 'resultado'
    const resultadoElement = document.getElementById('resultado');
    // Define o conteúdo HTML do elemento com a mensagem formatada em um parágrafo
    resultadoElement.innerHTML = `<p>${mensagem}</p>`;
};

// Aguarda o evento de que todo o DOM foi carregado antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    // Obtém referências aos botôes do DOM pelos seus IDs
    const saudarBtn = document.getElementById('saudar');
    const limparBtn = document.getElementById('limpar');

    // Adiciona um listener de evento de clinete no botão "Saudar"
    saudarBtn.addEventListener('click', function () {
        // Chama a função de saudação com o nome "João" e armazena o resultado
        const mensagem = saudação("João");
        // Chama a função para exibir o resultado da página
        mostrarResultado(mensagem);
    });

    // Adiciona um listener de evento de clique no botão "Limpar"
    limparBtn.addEventListener('click', () => {
        // Limpa o conteúdo de elemento de resultado definindo seu HTML para vazio
        document.getElementById('resultado').innerHTML = '';
    });
});