document.addEventListener('DOMContentLoaded', function () {
    const botao = document.getElementById('btnDescobrir');
    const entrada = document.getElementById('numero');
    const saida = document.getElementById('resultado');

    botao.addEventListener('click', function () {
        const num = entrada.value;

        if (num === "") {
            saida.textContent = 'Digite um número!';
            return
        }

        const numero = Number(num);

        if (numero > 0) {
            saida.textContent = 'O número é positivo.';
        } 
        else if (numero <0 ) {
            saida.textContent = 'O número é negativo.';
        }
        else {
            saida.textContent = 'O número é Zero.'
        }
    })
})