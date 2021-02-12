const bottom = document.querySelector('.bottom');
const area = document.querySelector('.area');

area.addEventListener('mouseover', e => {
  if (!bottom.classList.contains('bottomAparece'))
    bottom.classList.toggle('bottomAparece');
});

area.addEventListener('mouseout', e => {
  bottom.classList.toggle('bottomAparece');
});