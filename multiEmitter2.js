// Importing `events` module and creating an instance of EventEmitter class
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Listener Function 1: sayHello
const sayHello = () => {
	console.log('Hello User');
}

// Listener Function 2: sayHi
const sayHi = () => {
	console.log('Hi User');
}

// Listener Function 3: greetNewYear
const greetNewYear = () => {
	console.log('Happy New Year!');
}


// Listener Function 3: greetNewYear
const lastJoinee = () => {
	console.log('Happy New Year Last Joinee!');
}


//There can be multiple on()'s for a single emit():
// Subscribing to `userJoined` event
myEmitter.on('userJoined', sayHello);
myEmitter.on('userJoined', sayHi);
myEmitter.on('userJoined', greetNewYear);

// Emiting the `userJoined` Event
myEmitter.emit('userJoined');

//This wont work as it is mentioned AFTER the emit command 

myEmitter.on("userJoined", lastJoinee);
