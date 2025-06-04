const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');


iniciar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function (event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    tSec = 0;
    relogio.innerHTML = '00:00:00';
});

let tSec = 0;
let timer;

function criarSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' });
}

function iniciaRelogio() {
    timer = setInterval(function () {
        tSec++;
        relogio.innerHTML = criarSegundos(tSec);
    }, 1000);
}

