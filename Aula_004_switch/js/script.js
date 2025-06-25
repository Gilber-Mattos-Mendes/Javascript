// Aguarda o carregamento completo do HTML antes de rodar o script
document.addEventListener('DOMContentLoaded', function () {

    //Obtém o botão com id "btnMostrarDia"
    const botao = document.getElementById('btnMostrarDia');

    // Obtém o campo de entrada com id "numeroDIa" (onde o usuário digita o número)
    const entrada = document.getElementById('numeroDia');

    // Obtém o elemento com id "rspostaDia", onde será exibido o nome do dia
    const saida = document.getElementById('respostaDia');

    // Adiciona um evento ao botão para executar uma função quando ele for clicado
    botao.addEventListener('click', function () {

        // Convert o valor digitado pelo usuário (string) em número inteiro
        const numero = parseInt(entrada.value);

        // Verifica o valor da variável "numero" e exibe o dia correspondente
        switch (numero) {
            case 1:
                saida.textContent = 'Domingo';
                break;
            case 2:
                saida.textContent = 'Segunda-feira';
                break;
            case 3:
                saida.textContent = 'Terça-feira';
                break;
            //complete até sábado...
            default:
                saida.textContent = 'Número inválido!';
                break;
        }
    })
})