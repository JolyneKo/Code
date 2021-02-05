// Condições são usadas para fazer decisões no código
// Instrução if - executa um bloco de código (entre chaves) se uma condição for verdadeira (true)
// Instrução else - Se a condição for falsa, executar o bloco de código dentro do else
// Instrução else if - Usado para avaliar multiplas condições

/* if (condição) {
 *  // Executar se verdadeiro
 * } else if (condição_2) {
 *  // Executar se verdadeiro
 * } else {
 *  // Executar se nenhuma condição for verdadeira
 * }
 */

// É possível usar somente 1 if e 1 else
// Mas é possível usar multiplos else if
// 
// Operadores
//
// Operadores de igualdade
//
// O operador de igualdade (==), verifica se dois valores (direita e esquerda), são iguais, 
// esse operador converte os tipos, para que fiquem os dois lados com o meu tipo
// Esse operador retorna true ou false
//
// 1 == "1" // true
//
// O operador de igualdade estrito (===), verifica se os dois valores passados são iguais, mas NÃO converte os tipos
// Ele compara valor e tipo
//
// 1 === "1" // false
//
// Não deve se confundir com o operador de atribuíção (=)
//
// Operador de desigualdade 
//
// Os operadores de desigualdade funcionam do mesmo tipo
// Se for igual, retorna false,
// Se forem diferentes, retorna true
// Os operadores de desigualdade compara se dois valores são diferentes
// O operador de desigualdade (!=) converte os tipos
// O operador de desigualdade estrito (!==) NÃO converte o tipo
//
// 1 != 2 // true
// 1 !== '1' // true
//
// Operadores de comparação
//
// Operadores de comparação são usados para comparar dos valores (esquerda e direita)
// Eles retornam true ou false
// Os operadores de comparação são:
//  - Maior que (>)
//  - Menor que (<)
//  - Maior ou igual que (>=)
//  - Menor ou igual que (<=)
//
// Operadores lógicos
//
// Operadores lógicos, são usados para lógica, valores booleanos (true e false)
//
// Operador (AND) [&&] - Se AMBOS forem verdadeiro, retorna true (true && true == true)
// 
// Operador (OR) [||] - Se um ou outro forem verdadeiro, retorna true (true || false == true)
//
// Operador (NOT) [!] - Inverte o valor booleano, retorna false se true, true se false
//
// Os operadores podem ser usados em instruções if, eles retornam true ou false
// If executa, se a condição for verdadeira (true)

// Outros operadores:
// 
// Operadores aritméticos
// Adição (+)
// Subtração (-)
// Multiplicação (*)
// Divisão (/)
// Resto (%)
// Incrementação (++) incrementa variável (adiciona mais 1, x = x + 1)
// Decremento (--) subtrai a variável a 1 (x = x - 1)

// Operadores de atribuíção
// Atribuíção (=) - Atribui valor a uma variável
// Soma (+=) - Soma a variável, e depois atribui o valor a ela (x = x + 1)
// -=
// *=
// /=
// %=
var x = 1;
var y = 2;

if (x === y) {
    console.log("São iguais");
} else if (x > y) {
    console.log('X é maior do que Y');
} else if (x < y) {
    console.log('X é menor do que Y');
} else {
    console.log('Error');
}

// Switch
// Usados para avaliar um valor, e executar comandos para cada valor
// case - O case precisa ser quebrado com "break;", para parar a execução
// default - Caso nenhum valor for correspondente, executa esse bloco

var escolha = 1;

switch(escolha) {
    case 1:
        console.log("Escolha 1");
        break;
    case 2:
        console.log("Escolha 2");
        break;
    case 3:
        console.log("Escolha 3");
        break;
    default:
        console.log("Escolha inválida");
}

// Não é preciso usar 'break;' no default, pois é o final do switch
// Break é usado para parar a execução do case, se for omitido, o resto do código vai ser executado
