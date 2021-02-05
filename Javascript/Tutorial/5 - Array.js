// Arrays são variáveis que guardam vários valores
// Arrays tem tipo dinâmico, logo podem guardar vários valores de diferentes tipos
// Arrays são definidos pelos colchetes, e os elementos são separados por vírgula

var myArray = [1, "string", true]

// Todo elemento têm uma posição, chamada de index
// Os indexes são baseado em zero, o javascript conta começando do zero
//
//  0      1       2
// [1, "string", true]
//
// Logo a primeira posição, tem index zero
// Um elemento do array pode ser acessado pela notação dos colchetes

var primeiroElemento = myArray[0]; // 1

// Um array pode guardar outro array, isso se chama array multidimensional
var multDim = [[1, 2, 3], [1, 2, 3]];

// São acessados usando colchetes adicionais
var segundoArray = multDim[1][0] // 1

// Arrays são do tipo de referência de Objeto
// Arrays são mutáveis, ou seja, pode modificar elementos desse array

// Métodos

// 1 - Largura (propriedade)

var tamanho = myArray.length; // 3

// 2 - Anexar novo elemento no final do array
var ourArray = [1, 2, 3];

ourArray.push(4); // [1, 2, 3, 4]

// 3 - Remover último elemento
ourArray.pop(); // [1, 2, 3]

var elemento = ourArray.pop(); // Retorna o elemento deletado

// 4 - Adicionar elemento no começo
ourArray.unshift(0); // [0, 1, 2, 3]

// 5 - Remove primeiro elemento
ourArray.shift(); // [1, 2, 3]
var elementoRemovido = ourArray.shift(); // 0

// 6 - Transformar array em String
var outroArray = ["Batata", "Banana", "Alface"]

// join(separador)
outroArray.join(" "); // "Batata Banana Alface"]

// toString();
outroArray.toSring(); // "Batata, Banana, Alface"
