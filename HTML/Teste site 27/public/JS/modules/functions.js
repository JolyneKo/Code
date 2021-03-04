async function fazerRegistro(infosUser) {
  await fetch('/api/registrar', { 
    method: 'POST',
    headers: {  
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(infosUser)
  })
    .then(res => console.log(`Código: ${res.status}, status: ${res.statusText}`))
    .catch(error => console.log(error));
}

export {fazerRegistro};