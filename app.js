const sayHelloo23 = require("./hello.js");
const multiFunc = require("./multiFunctionExport.js");

sayHelloo23("John");
sayHelloo23("Peter");
sayHelloo23("Rohit");


multiFunc.sayNameHere('Johny boy');
console.log(multiFunc.foo);
multiFunc.sayAgeHere("223");
