const username = document.querySelector('#username').value;
const btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  const params = `username=${username}`;

  xhr.open('POST', '/api/users', true);

  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.onload = function() {
    if (this.status === 200) {
      console.log('Sucesso');
    }
  }

  xhr.onerror = function() {
    console.log('Error');
  }

  xhr.send(params);
});