"use strict";
// const anchor = document.querySelector('a'); // gives error "Object is possible 'null'"
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
/* type casting */
var form = document.querySelector('.new-item-form');
// console.log(form.children); // prints all form-children with div tag
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
