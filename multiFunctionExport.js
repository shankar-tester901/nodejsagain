function sayName(name){
    console.log(`Hello ${name}`);
}


function sayAge(age) {
  console.log(`Hello ${age} yrs old`);
}

module.exports = {
  foo: "bar",
  sayNameHere: sayName,
  sayAgeHere: sayAge,
};

// Program to export just one function