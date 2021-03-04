// valida Email
function validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

// Valida Password
function validatePassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(String(password))
}

// Verifica se objeto é vazio
function isObjEmpty(obj) {
  const regex = /^\s*$/;
  
  const valores = Object.keys(obj).map(key => regex.test(obj[key]));

  return valores.includes(true);
}

export { validateEmail, validatePassword, isObjEmpty };