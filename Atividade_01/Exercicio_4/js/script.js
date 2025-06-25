const quadrado = document.getElementById('quadrado');

document.getElementById('vermelho').addEventListener('click', () => {
    quadrado.style.backgroundColor = 'red';
});

document.getElementById('verde').addEventListener('click', () => {
    quadrado.style.backgroundColor = 'green';
});

document.getElementById('azul').addEventListener('click', () => {
    quadrado.style.backgroundColor = 'blue';
});