const menu1 = document.querySelector('.barra-superior .menu-icon');
const menu2 = document.querySelector('.barra-lateral .menu-icon');
const barraLateral2 = document.querySelector('.barra-lateral');

menu1.addEventListener('click', e => {
  console.log('a');
  barraLateral2.style.width = '100%';
  barraLateral2.style.height = '100%';
  barraLateral2.style.visibility = 'visible';
  barraLateral2.style.opacity = '100%';
  setTimeout(() => {
    barraLateral2.style.borderBottomRightRadius = '0';
    barraLateral2.style.borderTopLeftRadius = '0';
    barraLateral2.style.borderBottomLeftRadius = '0';
  }, 200)
});

menu2.addEventListener('click', e => {
  barraLateral2.style.width = '0';
  barraLateral2.style.height = '0';
  barraLateral2.style.visibility = 'hidden';
  barraLateral2.style.opacity = '0';
  setTimeout(() => {
    barraLateral2.style.borderBottomRightRadius = '100%';
    barraLateral2.style.borderTopLeftRadius = '100%';
    barraLateral2.style.borderBottomLeftRadius = '100%';
  }, 200)
});