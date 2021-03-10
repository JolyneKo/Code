$('#country').on('change', () => {
    if ($('#country').val().toLowerCase() === "brasil") {
        $('#state').html(`
          <option value="Acre">Acre</option>
          <option value="Alagoas">Alagoas</option>
          <option value="Amapá">Amapá</option>
          <option value="Amazonas">Amazonas</option>
          <option value="Bahia">Bahia</option>
          <option value="Ceará">Ceará</option>
          <option value="Espirito Santo">Espirito Santo</option>
          <option value="Goiás">Goiás</option>
          <option value="Maranhão">Maranhão</option>
          <option value="Mato grosso">Mato grosso</option>
          <option value="Mato grosso do sul">Mato grosso do sul</option>
          <option value="Minas Gerais">Minas Gerais</option>
          <option value="Pará">Pará</option>
          <option value="Paraíba">Paraíba</option>
          <option value="Paraná">Paraná</option>
          <option value="Pernambuco">Pernambuco</option>
          <option value="Piauí">Piauí</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="Rio grande do norte">Rio grande do norte</option>
          <option value="Rio grande do sul">Rio grande do sul</option>
          <option value="Rondônia">Rondônia</option>
          <option value="Roraima">Roraima</option>
          <option value="Santa caratina">Santa caratina</option>
          <option value="São Paulo">São Paulo</option>
          <option value="Sergipe">Sergipe</option>
          <option value="Tocantins">Tocantins</option>
          <option value="Distrito Federal">Distrito Federal</option>
        `);
    } else {
        $('#state').html('');
    }
});

$('#submit').click((e) => {
    e.preventDefault();

    // Pega os valores dos inputs
    const userInfo = {
        username: $('#username').val(),
        email: $('#email').val(),
        country: $('#country').val(),
        state: $('#state').val(),
    }

    // Verifica se email já é registrado
    fetch(`backend.php?email=${userInfo.email}`)
        .then(status => {
            if (status.status === 404) {
                $('.container').prepend('<p class="container__error">Email já existe</p>');
                setTimeout(() => $('.container__error').remove(), 2000);
            } else {
                registrar(userInfo);
            }
        });
});

// Valida Email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Registra e verifica por erros
function registrar(userInfo) {
    const isEmailValid = validateEmail(userInfo.email);
    const isEmpty = !Object.values(userInfo).every(x => (x !== null && x !== ''));

    if (isEmailValid && !isEmpty) {
        $.post('backend.php', userInfo, (data, status) => {
            if (status === "success") {
                console.log("Status: OK, enviado");
            } else {
                console.log(`Status: ${status}`);
            }
        });
    } else if (isEmpty) {
        $('.container').prepend('<p class="container__error">Preencha os campos</p>');
        setTimeout(() => $('.container__error').remove(), 2000);
    } else {
        $('.container').prepend('<p class="container__error">Email inválido</p>');
        setTimeout(() => $('.container__error').remove(), 2000);
    }
}