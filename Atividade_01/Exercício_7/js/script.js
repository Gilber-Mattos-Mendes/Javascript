document.addEventListener('DOMContentLoaded', function () {
    const entrada = document.getElementById('entrada');
    const botao = document.getElementById('btnTentativa');
    const saida = document.getElementById('resposta');


    let num1 = (Math.random() * 10);

    let num2 = Math.round(num1);


    botao.addEventListener('click', function () {

        const tentativa = parseInt(entrada.value);

        if (tentativa > num2) {
            saida.textContent = 'Errou, Digite um número Menor.';
            return;
        } else if (tentativa < num2) {
            saida.textContent = 'Errou, Digite um número Maior.';
            return;
        } else if (num2 === tentativa) {
            saida.textContent = 'Parabéns você acertou!!!';
        };
    });
});