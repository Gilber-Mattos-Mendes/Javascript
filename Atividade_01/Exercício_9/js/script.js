document.addEventListener('DOMContentLoaded', function () {
    const botao = document.getElementById('btnTema');
    const corpo = document.body;

    // Define o tema inicial
    corpo.classList.add('claro');

    botao.addEventListener('click', function () {
        corpo.classList.toggle('escuro');
        corpo.classList.toggle('claro');
    });
});