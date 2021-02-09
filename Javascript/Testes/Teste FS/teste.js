const fs = require('fs');

fs.mkdirSync('Textos');
fs.writeFileSync('Textos/arquivo.txt', 'Hello World');

fs.appendFileSync('Textos/arquivo.txt', '!!!');



