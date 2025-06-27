document.addEventListener('DOMContentLoaded', function () {
    const entrada = document.getElementById('numero');
    const botao = document.getElementById('btnVerificar');
    const saida = document.getElementById('resultado');
    

botao.addEventListener('click', function () {

    const numero = parseInt(entrada.value)

    if (numero % 2 == 0) {
        saida.textContent = 'O número é Par!'
    }
    else if (numero % 2 != 0) {
        saida.textContent = 'O número é ímpar!'
    }
})
})