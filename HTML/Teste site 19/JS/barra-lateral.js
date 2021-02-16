const menu = document.querySelector('.menu-icon');
const barra = document.querySelector('.barra-lateral');
const main = document.querySelector('.main');

menu.addEventListener('click', e => {
  if (!barra.classList.contains('lateral_aberto'))
    main.style.marginLeft = '250px';
  else {
    main.style.marginLeft = 0;
  }

  barra.classList.toggle('lateral_aberto');
});