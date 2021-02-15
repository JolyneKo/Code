const items = document.querySelectorAll('.navbar li');
const barra = document.querySelector('.barra');

items.forEach(item => {
  const position = item.getBoundingClientRect();

  item.addEventListener('mouseover', e => {
    barra.style.top = position.top + 'px';
    barra.style.animation = 'barra_abrindo 0.1s ease-in forwards';
    barra.innerHTML = `<p>${item.dataset.nome}</p>`
  });
  
  item.addEventListener('mouseout', e => {
    barra.style.width = '0';
    barra.style.animation = 'barra_fechando 0.2s linear forwards';
  });
});