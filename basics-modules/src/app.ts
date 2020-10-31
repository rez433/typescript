import { Invoice } from './classes/Invoice.js';



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