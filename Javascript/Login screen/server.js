const express = require('express');
const path = require('path');
const fs = require('fs');

const server = express();

server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/index.html'));
});

server.post('/api/users', (req, res) => {
  const text = JSON.stringify(req.body);

  fs.writeFile(`Users/${req.body.user}.json`, text, (err) => {
    if (err) console.log(err);
  });

  res.json(req.body);
});

server.listen(3000, () => {
  console.log('Servidor escutando na porta 3000');
});