const EventEmitter = require('events');

const miEmitter = new EventEmitter();

miEmitter.on('evento', () => {
    console.log('Se ha disparado el evento');
});

miEmitter.emit('evento');