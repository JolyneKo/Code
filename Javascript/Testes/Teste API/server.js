const express = require('express');
const fs = require('fs');
const path = require('path');
const { PORT } = require('./infos.json');
const app = express();

const animaisRegistrados = [];

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.get('/animais/:name', (req, res) => {
  const files = fs.readdir(path.join(__dirname, 'Animais'), (error, files) => {
    if (error) {
      console.log(error); 
    } else {
      files.forEach(fileName => {
        if (fileName == `${req.params.name}.json`) {
          res.sendFile(__dirname + `/Animais/${fileName}`);
        }
      });
    }
  });
});

app.post('/animais/registrar', (req, res) => {
  const animal = {
    nome: req.body.name,
    idade: req.body.age,
    espécie: req.body.specie,
  }
  
  const animalJSON = JSON.stringify(animal);

  animaisRegistrados.push(animal.nome);

  fs.writeFile(`Animais/${animal.nome}.json`, animalJSON, err => {
    if (err) console.log(err);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}.`)
  console.log(`http://localhost:${PORT}`);
});