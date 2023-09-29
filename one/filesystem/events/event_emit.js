var events = require("events");
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log("I hear a scream!");
};

//Assign the event handler to an event:
eventEmitter.on("scream", myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit("scream");


//Create an event handler:
var noscream_myEventHandler = function () {
  console.log("I hear no screams whatsoever 111111111!");
};


//Create an event handler:
var noscream_myEventHandler2 = function () {
  console.log("I hear no screams whatsoever 222222222!");
};

//Assign the event handler to an event:
eventEmitter.on("noscream", noscream_myEventHandler);
eventEmitter.on("noscream", noscream_myEventHandler2);
//Fire the 'scream' event:
eventEmitter.emit("noscream");
