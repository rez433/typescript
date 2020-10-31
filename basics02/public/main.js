"use strict";
var greet;
// greet = 'hello';  ginves an error cause greet should be a function
greet = function () {
    console.log('Hello! Friend!');
};
var add = function (a, b, c, d) {
    if (c === void 0) { c = 0; }
    console.log(a + b + c);
    console.log(d);
};
// add(2, 5); // prints: 7
add(2, 5, 8, 'addition');
var minus = function (a, b, c, d) {
    if (c === void 0) { c = 0; }
    console.log(a - b - c);
    console.log(d);
};
minus(2, 4, 6, 'subtraction');
// prints: -8
// prints subtraction
// ####### Function Signatures ##########
var greeting; //signature
greeting = function (name, greeting) {
    console.log(name + " says " + greeting);
};
greeting('John Doe', 'Hello'); // prints: John Doe says Hello
var logDetails;
logDetails = function (writers) {
    console.log(writers.name + " is " + writers.age + " years old.");
};
logDetails({ name: 'John Doe', age: 30 }); //prints: John Doe is 30 years old.
