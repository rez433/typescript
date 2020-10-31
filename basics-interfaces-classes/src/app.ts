import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { PrintInvoice } from './interfaces/PrintInvoice.js';



let docOne: PrintInvoice;
let docTwo: PrintInvoice;

docOne = new Invoice('Jill Doe', 'copywriting', 400);
docTwo = new Payment('John', 'website design', 800);

let docs: PrintInvoice[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);


// making an interface for IsPerson
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

// creating me from IsPerson interface
const me: IsPerson = {
    name: 'John Doe',
    age: 30,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log('I spent ', amount);
        return amount;
    }
}

console.log(me);


// greetPerson takes an object as argument
const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name);
}

greetPerson(me)

const invOne = new Invoice('mario', 'work on website', 230);
const invTwo = new Invoice('luigi', 'work on blog', 320);


// console.log(invOne, invTwo);

let invoices: Invoice[] = []; // onlly allow Invoice objects to be pushed inside invoices list
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

// invOne.client = 'John Doe'; // givs error because client is readonly 
invTwo.amount = 600;

invoices.forEach(inv => {
    console.log(inv.client, /*inv.details givs error because details is private */ inv.amount, inv.printInvoice()) //inv.printInvoice can access all properties even private ones
})

/* type casting */
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children); // prints all form-children with div tag

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})