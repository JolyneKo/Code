const titulo = document.querySelector('.barra-superior .titulo');
const menuIcon = document.querySelector('.menu-icon');
const barraLateral = document.querySelector('.barra-lateral');
const main = document.querySelector('.main');


// Título
titulo.addEventListener('click', e => {
  window.location.href = "index.html";
});

// Abrir barra-lateral
menuIcon.addEventListener('click', e => {
  barraLateral.classList.toggle('aberta');
  if (barraLateral.classList.contains('aberta')) {
    main.style.marginLeft = '20%';
  } else {
    main.style.marginLeft = '10%';
  }
});

