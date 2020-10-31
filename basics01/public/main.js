"use strict";
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    return console.log(input);
});
// ########### variables #########
var str = 'Typescript';
var num = 120;
var passed = false;
// **** can't change type after declaring ****
// str = 120;
// num = '120';
// passed = 'true';
var circle = function (diameter) {
    return diameter * Math.PI;
};
console.log(circle(8)); // prints 25.132741228718345
// console.log(circle('8'));
// ########### Array #########
var names = ['John', 'Joe', 'Jill'];
// names.push(3); cant push another data type in to array of string
var mixedNamesNumbers = ['John', 30, 'Joe', 25];
mixedNamesNumbers.push('Jill');
mixedNamesNumbers.push(20);
console.log(mixedNamesNumbers); // prints: [ "John", 30, "Joe", 25, "Jill", 20 ]
// ########### Objects #########
var person = {
    name: 'John',
    lastName: 'Doe',
    age: 30
};
// person.lastName = 30; gives errors, cant change type after it is declared
// person.job = 'Writer'; gives errors, cant add properties to alreade decalred object
// ############ explicit types ##################
var str1;
var num1;
var passed1;
str1 = 'John';
num1 = 30;
passed1 = false;
// str1 = 30; gives error
// num1 = '30'; gives error
// passed1 = 'true'; gives error
var person1;
person1 = { name: 'John', lastName: 'Doe', age: 30 };
// person1 = {name: 'John', lastName: 'Doe'}; gives error if properties or type does not match
// person1 = {name: 'John', lastName: 'Doe', age: 30, married: fales}; gives error if properties or type does not match
// ############ union types ##################
var mixedArray = [];
mixedArray.push('John');
mixedArray.push(30);
mixedArray.push(false);
console.log(mixedArray);
var mixedVar;
mixedVar = '30';
mixedVar = 30;
var mixedObj;
mixedObj = { name: 'John', age: 30 };
// ############ any type ##################
var age = 30;
age = true;
console.log(age); // prints: true
age = '30';
console.log(age); // prints: 30
age = { age: '30' };
console.log(age); // prints: Object { age: "30" }
/* array  */
var mixedArr = [];
mixedArr.push(30);
mixedArr.push('age');
mixedArr.push(false);
console.log(mixedArr); // Array(3) [ 30, "age", false ]
/* Object */
var person2;
person2 = { name: 'John', age: 34 };
person2 = { name: 'John', age: '34' };
