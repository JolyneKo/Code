const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

app.post('/api/registrar', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});