const fs = require('fs');
let i = 0;

fs.createWriteStream('arquivo.txt', { flags: 'wx' });

process.on('uncaughtException', () => {
    fs.createWriteStream(`arquivo ${++i}.txt`, { flags: 'wx' });
})

