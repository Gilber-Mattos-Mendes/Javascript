document.addEventListener('DOMContentLoaded', function () {
    const botao1 = document.getElementById('btnSoma');
    const botao2 = document.getElementById('btnSubtracao');
    const botao3 = document.getElementById('btnMultiplicacao');
    const botao4 = document.getElementById('btnDivisao');
    const entrada1 = document.getElementById('valor1');
    const entrada2 = document.getElementById('valor2');

    const saida1 = document.getElementById('resultado');

    botao1.addEventListener('click', function () {
        resposta = parseFloat(entrada1.value) + parseFloat(entrada2.value);
        saida1.textContent = resposta;

    })

    const saida2 = document.getElementById('resultado');

    botao2.addEventListener('click', function () {
        resposta = parseFloat(entrada1.value) - parseFloat(entrada2.value);
        saida2.textContent = resposta;
        
    })

    const saida3 = document.getElementById('resultado');

    botao3.addEventListener('click', function () {
        resposta = parseFloat(entrada1.value) * parseFloat(entrada2.value);
        saida3.textContent = resposta;
        
    })

    const saida4 = document.getElementById('resultado');

    botao4.addEventListener('click', function () {
        if (parseFloat(entrada2.value) === 0) {
            saida4.textContent = "Operação Inválida.";
        } else {
            let resposta = parseFloat(entrada1.value) / parseFloat(entrada2.value);
            saida4.textContent = resposta;
        }
    });
})