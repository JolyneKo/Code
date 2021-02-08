// Módulo é uma coleção de objetos, variáveis e funções que podem ser usadas por códigos externos
// São códigos javascripts que as variáveis/objetos podem ser acessadas fora do arquivo
// É possível exportar suas variáveis usando o método "module.exports"

const soma = function(num1, num2) {
    return num1 + num2;
}

module.exports = soma; // Exporta a variável soma

// É possível importar essa variável, e usá-la em um código externo com o método require()
// Metódo require está no objeto global

// No outro arquivo
const outraSoma = require('./3 - Modules.js'); // ./ - significa, pasta atual.

// É possível extrair vários métodos colocando numa propriedade
// modules.exports.soma = soma;
// modules.exports.pi = pi;
