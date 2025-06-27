document.addEventListener('DOMContentLoaded', function () {
    const numero = document.getElementById('velocidade');
    const botao = document.getElementById('btnVerificar');
    const saida = document.getElementById('resultado');
    

botao.addEventListener('click', function () {

    const velocidade = parseInt(numero.value);

    if (numero1 === numero2 && numero2 === numero3) {
        saida.innerHTML = `Os números são iguais! ${numero1}, ${numero2}, ${numero3}`;
    }
    else {
        let maior = Math.max(numero1, numero2, numero3);
        let menor = Math.min(numero1, numero2, numero3);
        saida.innerHTML = `O maior Número é: ${maior} e o menor é: ${menor}`;
    }
})
})