const interruptor = document.querySelector('.barra-superior #switch');
const barraSuperior = document.querySelector('.barra-superior');
const main = document.querySelector('.main');
const barraLateral = document.querySelector('.barra-lateral')

interruptor.addEventListener('click', e => {
    barraSuperior.classList.toggle('light');
    main.classList.toggle('light');
    barraLateral.classList.toggle('lightLateral');

    if (barraSuperior.classList.contains('light')) {
        interruptor.setAttribute('src', '../Imagens/light.png');    
        interruptor.setAttribute('title', 'Ativar light-theme')
    } else {
        interruptor.setAttribute('src', '../Imagens/dark.png');     
        interruptor.setAttribute('title', 'Ativar dark-theme')
    }
})