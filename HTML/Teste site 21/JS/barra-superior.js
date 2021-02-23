const barra = document.querySelector('.barra-superior');
const logo = document.querySelector('.logo');
const lists = document.querySelectorAll('.links li');

window.addEventListener('scroll', e => {
  if (window.scrollY > 100) {
    barra.style.height = '50px';
    logo.style.width = '80px'

    lists.forEach((list) => {
      list.style.padding = '10px';
    });
  } else {
    barra.style.height = '100px';
    logo.style.width = '150px'
    
    lists.forEach((list) => {
      list.style.padding = '20px';
    })
  }
});