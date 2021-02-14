const player = document.querySelector('.player');
const inimigo = document.querySelector('.inimigo');

document.addEventListener('keypress', e => {
  if (e.keyCode === 32 && player.classList != 'player_jump') {
      player.classList.add('player_jump');
  }
    setTimeout(() => player.classList.remove('player_jump'), 500);
});