const icon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

icon.addEventListener('click', e => {
  if (!menu.classList.contains('menu-aberto')) {
    menu.classList.add('menu-aberto');
  } else {
    menu.classList.remove('menu-aberto');
  }
});