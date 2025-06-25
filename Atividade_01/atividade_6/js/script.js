document.addEventListener('DOMContentLoaded', () => {
    const entrada = document.getElementById('palavra');
    const botao = document.getElementById('btnVerificar');
    const resultado = document.getElementById('resultado');

    botao.addEventListener('click', () => {
        const novapalavra = entrada.value.trim().tolowerCase().replace(/[W_]/g, '');
        const invertida = novapalavra.split('').reverse().join('');

        if (palavra === "") {
            resultado.textContent = "Digite uma palavra.";
        } else if (novapalavra === invertida) {
            resultado.textContent = `"${entrada.value}" é um palíndromo!`;
            resultado.style.color = 'green';
        } else {
            resultado.textContent = `"${entrada.value}" não é um palíndromo.`;
            resultado.style.color = 'red';
        }
        
    });
});