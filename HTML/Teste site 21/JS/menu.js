const icon = document.querySelector('.menu-icon');
const menu = document.querySelector('.Menu');

icon.addEventListener('click', () => {
  menu.classList.toggle('Menu_aberto');
});