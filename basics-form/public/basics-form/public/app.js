"use strict";
// class Invoice {
//     // client: string;
//     // details: string;
//     // amount: number;
//     /* access modifiers readonly, private, public */
//     readonly client: string; // can be accessed but not modified outside of class
//     private details: string; // cant be accessed outside of class
//     public amount: number; // can be accessed and modified outside of class
//     constructor(c: string,d: string,a: number) {
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     }
//     printInvoice() {
//         return `${this.client} ows $${this.amount} for ${this.details}`
//     }
// }
// class Invoice can be rewritten as:
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.printInvoice = function () {
        return this.client + " ows $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on website', 230);
var invTwo = new Invoice('luigi', 'work on blog', 320);
// console.log(invOne, invTwo);
var invoices = []; // onlly allow Invoice objects to be pushed inside invoices list
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// invOne.client = 'John Doe'; // givs error because client is readonly 
invTwo.amount = 600;
invoices.forEach(function (inv) {
    console.log(inv.client, /*inv.details givs error because details is private */ inv.amount, inv.printInvoice()); //inv.printInvoice can access all properties even private ones
});
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
