// 1 - Achar o tamanho da string
// Propriedade Length

var s = "Hello";

console.log(s.length);

// 2 - Acessando caractére - charAt(index);
var primeiroChar = s.charAt(0);
console.log(primeiroChar);

primeiroChar = s[0];
console.log(primeiroChar);

// 3 - Achando o index de uma string - indexOf();
var text = "Meu nome é Pedro";
var index = text.indexOf('nome');

console.log(index);

// 4 - toUpperCase(); toLowerCase();
// String são imutáveis, logo toUpperCase() RETORNA uma string, em uppercase/lowercase

var upperText = text.toUpperCase();

console.log(upperText)
console.log(text);

// 5 - Tirando espaços desnecessários - trim()

var texto = "       Eae     ";
var semEspaçoTexto = texto.trim();

console.log(semEspaçoTexto);

// 6 - Replace() - substituir;
// .replace("string para substituir", "nova string");
var txt1 = "Meu nome é Carlos";
var newTxt = txt1.replace('Carlos', 'Jean');

console.log(newTxt);

// 7 - Slice(startIndex, endIndex), cortar a string
// .slice(indexInicial, indexFinal);
newTxt =  txt1.slice(11);

console.log(newTxt);
