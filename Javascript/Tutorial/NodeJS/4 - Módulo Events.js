// Event Emitter - Permite criar seus próprios eventos

const events = require('events');

// Cria o Emitor de Eventos
let myEmitter = new events.EventEmitter();

// Quando um certo evento é disparado, executar função
myEmitter.on('eventoCustomizado', function(msg) {
     console.log('Hi');
});

// Emite Evento
myEmitter.emit('eventoCustomizado', 'Mensagem'); // (evento, mensagem)

