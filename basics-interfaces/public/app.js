import { Invoice } from './classes/Invoice.js';
// creating me from IsPerson interface
const me = {
    name: 'John Doe',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    }
};
console.log(me);
// greetPerson takes an object as argument
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
const invOne = new Invoice('mario', 'work on website', 230);
const invTwo = new Invoice('luigi', 'work on blog', 320);
// console.log(invOne, invTwo);
let invoices = []; // onlly allow Invoice objects to be pushed inside invoices list
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// invOne.client = 'John Doe'; // givs error because client is readonly 
invTwo.amount = 600;
invoices.forEach(inv => {
    console.log(inv.client, /*inv.details givs error because details is private */ inv.amount, inv.printInvoice()); //inv.printInvoice can access all properties even private ones
});
/* type casting */
const form = document.querySelector('.new-item-form');
// console.log(form.children); // prints all form-children with div tag
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
