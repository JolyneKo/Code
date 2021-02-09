// FileSystem (fs) - permite criar/manipular arquivos com Javascript

// Ler Arquivos

fs.readFileSync('arquivo.txt', 'utf8'); // Versão Sincronizada

// Sync espera pelo método ser completado, para depois rodar o resto do código, ele bloqueia o código

// Async
fs.readFile('arquivo.txt', (error, conteúdo) => { // Ler o Arquivo, e executa a função
    if (error) throw error;
    console.log(conteúdo);
})

// Escrever Arquivos

// Sync
fs.writeFileSync('arquivoNovo.txt', 'conteúdo'); // Cria arquivo, e escreve nele

// Async
fs.writeFile('arquivoNovo.txt', 'conteúdo', (error) => { // Cria arquivo, escreve e executa a função
    if (error) throw error;
    console.log('Arquivo criado');
})

// Deletar arquivos

fs.unlink('arquivo.txt');

// Criar Arquivos
fs.createWriteStream('arquivo.mp4');

// Anexar texto ao arquivo

// Anexa texto ao arquivo, cria arquivo se não existir

// Sync
fs.appendFileSync('arquivo.txt', 'texto');

// Async
fs.appendFile('arquivo.txt', 'texto', function(error) {
    if (error) throw error;
    console.log('Anexado texto ao arquivo');
});

// Diretórios

// Criar Diretórios

// Sync
fs.mkdirSync('diretório');

// Async
fs.mkdir('diretório', function() {
    console.log('Diretório criado');
});

// Deletar diretórios

// Sync
fs.rmdirSync('diretório');

// Async
fs.rmdir('diretório', function() {
    console.log('Diretório removido');
});
