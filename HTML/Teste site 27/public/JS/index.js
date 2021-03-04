import { validateEmail, validatePassword, isObjEmpty } from './modules/validations.js';
import { fazerRegistro } from './modules/functions.js';

// On submit
$('.forms__submit').click((e) => {
  e.preventDefault();

  // Pega informações dos inputs
  const infosUser = {
    email: $('#email').val(),
    password: $('#password').val(),
    birthday: $('#birthday').val(),
    gender: $('#gender').val(),
  }
  
  const { password, email } = infosUser;
  
  // Valida Email, Senha, e se vazio
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isEmpty = isObjEmpty(infosUser);
  
  // Se for válido, faz o registro
  if (isEmailValid && !isEmpty && isPasswordValid) {
    fazerRegistro(infosUser);
    window.location.href = 'http://localhost:3000/sucesso.html';
  } else if (isEmpty) {
    $('body').prepend('<p class="error">Preencha os campos</p>');
  } else if (!isPasswordValid) {
    $('body').prepend('<p class="error">Digite uma senha válida</p>');
  } else {
    $('body').prepend('<p class="error">Digite um email válido.</p>');
  }
});