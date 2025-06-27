document.addEventListener('DOMContentLoaded', function () {
    const entrada1 = document.getElementById('numero1');
    const entrada2 = document.getElementById('numero2');
    const entrada3 = document.getElementById('numero3');
    const botao = document.getElementById('btnVerificar');
    const saida = document.getElementById('resultado');
    

botao.addEventListener('click', function () {

    const numero1 = parseInt(entrada1.value);
    const numero2 = parseInt(entrada2.value);
    const numero3 = parseInt(entrada3.value);

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