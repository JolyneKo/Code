// Loops são usados para repetir um bloco de código várias vezes
// Todo o código dentro das chaves ({}) é repetido

// For loop

// O for-loop executa um código que repete um número finito de vezes
// O for tem essa seguinte estrutura
//
// for (inicialização; condição; incrementação) {
//
//      // Código
// }
//
// Inicialização - Usado para inicializar variáveis
// Condição - O loop vai ser executado, se essa condição é verdadeira, quando for falsa, é parada de executar
// Incrementação ou expressão final - Incrementa/decrementa a variável, executado no final
//
// Cada parte é separada pelo ponto e vírgula

for (let i = 0; i < 10; i++) {
    // código
}

// Esse código inicia uma variável i, com valor 0
// O loop vai ser executado se i < 10
// Depois que nosso loop for executado, caso for 1 < 10, o valor i vai ser incrementado
// O loop vai ser executado até i < 10 for falso
//
// Primeiro ele verifica se a condição é verdadeira, executa o código, e depois incrementa
// O i é incrementado a cada iteração do loop
// O loop é iterado se i < 10

// As três partes do for loop são opcionais
// A parte de incrementação pode fazer uma expressão aritmética dentro (uma soma por 2, por exemplo)

// While

// While loop repete um código, enquanto uma condição for verdadeira

let i = 0;

while(i < 10) {
    console.log('hello');
}

// Faz o loop enquanto i for menor do que 10
// Nesse caso, nada modifica o valor i, logo o loop é infinito
// O nome i vem do nome 'iterador', mas pode ser qualque nome

let k = 0; 
while(k < 10) {
    console.log(k);
    k++;
}

// Para modificar o valor do K, incrementamos ele
// Enquanto k for menor do que 10, executa o código e incrementa ele
// Ficou igualzinho ao for loop

// Do While

// O Do While loop, executa o código dento do 'do', e repete, se uma condição for verdadeira

let j = 0;

do {
    console.log('Loops');
} while(j < 10);

// O código executa o código, pelo menos uma vez,
// O código só é repetido, se j < 10
