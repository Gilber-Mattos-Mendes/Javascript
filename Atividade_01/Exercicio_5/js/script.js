document.addEventListener('DOMContentLoaded', function () {
    const entrada = document.getElementById('novoItem');
    const botao = document.getElementById('btnAdicionar');
    const lista = document.getElementById('lista');

    botao.addEventListener('click', function () {
        const texto = entrada.value.trim();
        if (texto !== "") {
            const novoitem = document.createElement('li');
            novoitem.textContent = texto;
            lista.appendChild(novoitem);
            entrada.value = "";
            entrada.focus();
        }
    });
});