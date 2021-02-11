// É possível criar um servidor usando Node.js, usando o módulo http

const http = require('http');

// Cria um servidor, quando o servidor for acessado, essa função é executada
const server = http.createServer(function(req, res) {

    // Cria Header com status 200 e tipo de conteúdo (como objeto)
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    
    // Termina a response com o arquivo como parâmetro
    res.end('Hello World Text');
});

// req e res são métodos sobre a request e response

// Request Header
// Estrutura: Content-type status
// Ex: Text/html 200 OK

// Escuta a porta 3000 com o IP local
server.listen(3000, '127.0.0.1');
