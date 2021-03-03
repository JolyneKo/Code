const icon = document.querySelector('.header__icons__theme');
const main = document.querySelector('.main');
const cards = document.querySelectorAll('.card');
const headerA = document.querySelectorAll('.header a');

let isLightTheme = false;

icon.addEventListener('click', () => {
  // IF lightTheme, turn to Dark Theme. Else turn to Light Theme
  (isLightTheme) ? turnDarkTheme() : turnLightTheme();
});

// Turn to Dark theme
function turnDarkTheme() {
  main.style.backgroundColor = 'rgb(15, 15, 15)';

  cards.forEach(card => {
    const cardP = card.querySelector('.card__description')
    card.style.backgroundColor = 'black';
    card.style.boxShadow = '0 0 20px -15px rgba(255, 255, 255, 0.5)';
    cardP.style.color = 'white';
  });

  headerA.forEach(a => {
    a.style.color = 'white';
  });

  icon.innerHTML = '<i class="far fa-sun header__switch__theme style="color: white;""></i>'

  isLightTheme = false;
}

// Turn to Light Theme
function turnLightTheme() {
  main.style.backgroundColor = '#f3f3f3';

  cards.forEach(card => {
    const cardP = card.querySelector('.card__description');
    card.style.backgroundColor = 'white';
    card.style.boxShadow = '0 0 20px -15px rgba(0, 0, 0, 0.5)';
    cardP.style.color = 'black';
  });

  headerA.forEach(a => {
    a.style.color = 'black';
  });

  icon.innerHTML = '<i class="far fa-moon" style="color: black;""></i>';

  isLightTheme = true;
}