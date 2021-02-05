// EcmaScript 6 - novidades

// Let

// A palavra-chave let foi introduzida no ES6 e permite a criação de variáveis
// Let tem o escopo de bloco, a variável está limitada ao bloco entre chaves
// Let não permite re-declaração
// Let é hoistiada, e não é inicializada

// Var tem escopo de função, somente limitado a função, dentro de qualquer outra estrutura, vira uma variável global
// Var não joga erro se re-declarar
// Var é hoistiada, e é inicializada com valor de undefined

for(let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i); // Erro, variável i não existe

// Const 

// A palavra-chave const permite a criação de constantes, variáveis somente leitura.
// Não é possível re-atribuir uma variável const
// Mas é possível mudar um array/objeto, pois modificam o objeto em si, não a variável
// Recomendando usar CAPS-LOCK e separar com underscore

const PI = 3.1415;
PI = 3; // Error

// Evitar mutação do Array/Objeto

// Object.freeze();

// Congela um objeto, não é possível mudar esse objeto

let myArray = [1, 2, 3];
Object.freeze(myArray);

myArray.push(4); // Error

// Funções Flechas

// Funções Anônimas

// É possível criar funções sem nome, usadas para serem guardadas numa variável, ou como parâmetro (callback function)

let hello = function() {
    console.log('Hello');
}

hello(); // Hello

// É possível escrever isso em outra forma, e melhor

// Arrow Function

// Estrutura: (params) => retorno;

// É possível omitir a palavra-chave function

let hi = () => {
    console.log('Hi');
}

// É possível omitir os parênteses, se tem um parâmetro, até omitir as chaves, para retornar pode omitir a palavra-chave return

let quadrado = x => x * x;

quadrado(2); // 4

// Default Parameters

// É possível inicializar parâmetros com valores, no ES6

const soma = (x = 0, y = 0) => x + y;

soma(); // 0

// Rest Operator

// É possível usar parâmetros ilimitados, e guardar os valores em um array, usando o rest operator (...)
// Ele guarda todos os parâmetros em uma array

function sum(...args) {
    args.reduce((total, sum) => total += sum);
}

sum(1, 2, 3, 4, 5); // 15

// Spread Operator

// É possível espalhar um array, separar todos os elementos de um array em um argumento

let myArr = [1, 2, 3, 4, 5];

sum(...myArr); // Espalha todos os elementos, resultado = 15;

// Destructuring 

// É possível extrair dados de array\objetos para botar em variáveis indepedentes

const person = {
    nome: 'Pedro',
    sobrenome: 'Luiz'
}

const {nome, sobrenome} = person;

console.log(nome, sobrenome); // Pedro Luiz

// Nesse exemplo, ele extrai a propriedade nome e guarda na variável nome, e extrai propriedade sobrenome e coloca na variável sobrenome.
// Lado direito fica o objeto que quer extrair
// Lado direito, nas chaves, fica as propriedades para extrair

// É Possível colocar outro nomes para as variáveis

// const {nome: n, sobrenome: sb} = person

// Onde n = 'Pedro',
// sb = 'Luiz'

// É possível fazer em Arrays

const [a, b,, ...resto] = [1, 2, 3, 4, 5, 6];

// Ele pega o primeiro elemento, guarda na variável a, segundo elemento na variável b, ignora o terceiro elemento, e os elementos restantes são guardados no array resto
// Rest operator é usado para pegar os elementos restantes
