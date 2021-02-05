// Objetos são uma estrutura de dados, que guardam pares de chave e valor
// Onde os valores podem ser acessado com um nome (chave), chamado propriedade
// Objetos tem tipo dinâmico e aceitam diferentes tipos
// Objetos podem guardar arrays, funções e até outros objetos
// Objetos são delimitados pelas chaves
// Cada propriedade é deparada do valor pelos dois ponto (:)
// Cada par de chave/valor é separado pela vírgula

var person = {
    nome: "Jean-luc",
    idade: 15,
    hobbies: ["programar", "dormir"],
    endereço: {
        cidade: "Manaus",
        estado: "AM",
        bairro: "Morro da Liberdade",
        rua: "Dr. Farias de Souza"
    }
}

// As propriedades devem ser escritas em string, mas o jaavscript converte automaticamente para string

// Para acessar uma propriedade, existe dois jeitos:
// Notação do ponto:

var nome = person.nome; // "Jean-luc"

// Notação dos colchetes

var nome2 = person["nome"] // "Jean-luc"

// A notação dos colchetes aceitam strings, logo são usadas quando a propriedade tem espaços
// A notação dos colchetes aceitam variáveis dentros

// Para acessar array dentro de um objeto:

var hobbie1 = person.hobbies[0]; // "Programar"

// Para acessar objetos dentro de objetos

var estado = person.endereço.estado;

