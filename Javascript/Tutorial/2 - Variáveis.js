// Variáveis funcionam como contêiner, onde guardam um elemento dentro de um nome, e é possível atribuir esse valor a esse nome
// x = 5;
// x + 1 => 5 + 1

// Instruções no javascripts são terminadas com ponto e vírgula (;), ponto e vírgula fala ao javascript que é o fim de uma instrução/comando.

console.log("Hello World"); // Imprime o texto Hello World no console

// Pontos e vírgulas são opcionais, mas recomendado usar eles

// Var - A palavra-chave 'var' criam variáveis.
// Var tem um escopo de função, ou seja, ela só pode ser vista dentro de uma função
// Escopo significa a visibilidade de uma variável
// Quando é criada dentro de uma função, é chamada de variável local
// Quando é criada fora de uma função, é chamada de variável global
// Uma variável global pode ser vista pelo todo o código
// Uma variável local pode ser vista somente dentro de uma função

// Um código é como fosse uma grande função
// O Javascript ler o código de cima para baixo, da esquerda para a direita
// O Javascript ler o código duas vezes
// As variáveis var são lidas, e a referência delas ficam no topo da memória
// As funções também são lidas e ficam no topo, mas o javascript sabe o que essa função faz
// Já as variáveis var, ele guarda somente a referência, sem o valor (undefined)
// Isso é chamado de 'Hoisting'
//
// Let e const (ES6) não tem isso, elas tem escopo global e sem hoisting
// Let declara variável
// Const declara variáveis, mas não é possível re-atribuir o valor, uma constante

// Operador de Atribuíção
// O operador de atribuíção (=) atribui valor a uma variável
// Tudo na direita, é calculado, e depois atribuído para a variável da esquerda

// Para criar uma variável, é preciso declará-la
var nome;

// Depois é preciso atribuí um valor a ela

// Sem ter um valor, essa variável fica com o valor de 'undefined'
console.log(nome); // undefined

// atribui um valor a ela, com o operador de atribuíção
nome = "Jean-Luc";

console.log(nome); // Jean-Luc

// É possível juntar a declaração e a atribuíção
// Esse processo se chama, inicialização
var sobrenome = "Silva dos Santos";

console.log(nome, sobrenome);

// Uma variável var ou let, podem ser re-atribuídas com valores diferentes
nome = "João";
sobrenome = "Souza";

console.log(nome, sobrenome);

// Várias variáveis podem ser declaradas em uma linha
var idade = 26, cidade = "São Paulo", estado = "São Paulo"; // Separando cada com uma vírgula

console.log(idade, cidade, estado);

// Let também criam variável
let numero = 5;

// Const criam constantes, variáveis que não podem ser mudadas
const pi = 3.1415;

// Os nomes são chamados de identificadores
// Os identificadores deve começar com uma letra, $ ou _
// Os identificadores podem ter números, mas NÃO devem ter número no início
// Os identificadores não podem ter espaços, nem caractéres especiais
// Os identificadores aceitam unicode
// Os identificadores não podem ser palavras reservadas do JavaScript, como a 'var'

// As variáveis podem aceitar díferentes tipos, e mudadas com díferentes tipos
