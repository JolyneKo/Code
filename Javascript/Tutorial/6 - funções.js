// Funções são bloco de códigos que podem ser reutilizados, com valores diferentes
// São como fosse uma função matemática, ela tem uma entrada f(x), um nome 'f', e entrada 'x', onde ela substitui o x na formula dentro, e produzindo (retornando) uma saída
// Uma função é definida pela palavra-chave function
// Uma função executa um bloco de código entre chaves, quando essa função for chamada
// Ela não necessita ter nenhum parâmetros (entradas)

function hello() {
    console.log('Hello World');
}

hello(); // 'Hello World'

// Uma função pode retonar um valor para uma variável, com a palavra chave return
// Return executa uma operação primeiro, depois retorna

function soma(x, y) {
    return x + y;
}

var resultado = soma(2, 2); // 4

// Os valores dados na entrada, são chamados de Argumentos
// Um parâmetro pode ser inicializado com um valor inicial
function div(x = 1, y = 1) {
    return x / y;
}

resultado = div(); // 1

// Se uma função retornar nada, ela retorna o valor de undefined

// Uma função pode ser diminuída, com a função de flecha
// Onde é preciso colocar os parâmetros (parenteses vazios se nenhum), e o código para executar, ou o retorno (sem a palavra-chave return)
// Ela omite a palavra function e o nome

var hi = () => {
    console.log('hi'); 
}

hi(); // 'hi'

var mult = (x, y) => x * y;

mult(4, 4); // 16

var pot = x => x * x;

pot(2); // 4
