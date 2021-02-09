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

fs.writeFile('arquivoNovo.txt', 'conteúdo', (error) => { // Cria arquivo, escreve e executa a função
    if (error) throw error;
    console.log('Arquivo criado');
})

// 
