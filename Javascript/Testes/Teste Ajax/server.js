const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(express.static(__dirname + '/public'));

server.use(bodyParser.urlencoded({ extended: true }));

server.post('/api/users', (req, res) => {
  const username = req.body;
  res.sendStatus(200);
  console.log(username);
});

server.listen(3000, () => {
  console.log('Servidor iniciado e escutando na porta 3000');
})