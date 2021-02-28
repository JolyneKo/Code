const express = require('express');
const server = express();
const PORT = 3000;

server.use(express.urlencoded({extended: false}));
server.use(express.static(__dirname + '/public'));

server.post('/resultados',  (req, res) => {
  const resposta = req.body.resposta;
  const regex = /2|2.|.2/gi;

  console.log(resposta.match(regex));
  console.log(req);

  const resultado = (resposta.match(regex) == 2) ? 'Correto!' : 'Errado!';

  res.send(resultado);
});


function verificarEmail(req, res, next) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  req.isValid = re.test(String(req.body.email).toLowerCase());
  next();
}

server.post('/login/registrar', verificarEmail, (req, res) => {
  const resultado = (req.isValid) ? 'Email válido' : 'Email inválido';
  res.send(resultado);
});

server.listen(PORT, () => {
  console.log(`Servidor iniciado, acesse http://localhost:3000 para acessá-lo`);
});