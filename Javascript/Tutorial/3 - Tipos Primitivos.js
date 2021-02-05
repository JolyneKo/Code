// Os tipos primitivos são 8:
// Number
// String
// Boolean
// null
// undefined
// Object
// Symbol
// BigInt

// As variáveis podem guardar diferentes tipos primitivos

// O JavaScript tem tipo dinâmico, não é preciso colocar explicitamente o tipo de uma variável

// Number: O Javascript não diferencia Número inteiro (int) para número racional (float), tudo é número
// String: Sequência de caractéres, texto entre aspas, o javascript aceita aspas simples, ou duplas: "Hello World" 'Hello World', tudo é string pra ele
// Boolean: Guarda dois valores, true ou false, on/off, 1 ou 0, não usam aspas.
// null: Valor nulo, colocar explicitamente que uma variável não tem valor
// undefined: sem valor, quando uma variável não tem valor atribuído, ela tem o valor de undefined
// Object: Array, Function, Object

let number = 3.14;
let s = 'Hello World';
let isTrue = true;
let nulo = null;
let semValor;
let myArray = [1, 2, 3, 4, 5];
function hello() {
    console.log('Hello World');
}
let myObj = {
    nome: "Jean-luc",
    sobrenome: "Silva dos Santos",
    idade: 15
}

console.log(number);
console.log(s);
console.log(isTrue);
console.log(nulo);
console.log(semValor);
console.log(myArray);
console.log(myObj);
