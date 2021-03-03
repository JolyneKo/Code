let isLightTheme = false;

// Se for Light-theme, vira Dark-theme, e vice-versa.
$('.header__icons__theme').on('click', () => isLightTheme ? turnDarkTheme() : turnLightTheme());

// Turn to Dark theme
function turnDarkTheme() {
  $('.main').css('background-color', 'rgb(15, 15, 15)');
  $('.card').css('background-color', 'black');
  $('.card').css('box-shadow', '0 0 20px -15px rgba(255, 255, 255, 0.5)');
  $('.card__description').css('color', 'white');
  $('.header a').css('color', 'white');
  $('.header__icons__theme').html('<i class="far fa-sun"></i>').css('color', 'white');
  isLightTheme = false;
}

// Turn to Light Theme
function turnLightTheme() {
  $('.main').css('background-color', '#f3f3f3');
  $('.card').css('background-color', 'white');
  $('.card').css('box-shadow', '0 0 20px -15px rgba(0, 0, 0, 0.5');
  $('.card__description').css('color', 'black');
  $('.header a').css('color', 'black');
  $('.header__icons__theme').html('<i class="far fa-moon"></i>').css('color', 'black');
  isLightTheme = true;
}