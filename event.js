const event = require('events');

var emitter = new event();

emitter.on('messagelogged', function () {
    console.log('event listen');
})

emitter.emit('messagelogged');
