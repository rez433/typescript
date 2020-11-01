import { Invoice } from './classes/Invoice';
import { ListeTemplate } from './classes/ListTemplate';
import { Payment } from './classes/Payment';
import { PrintInvoice } from './interfaces/PrintInvoice';

/* type casting */
const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListeTemplate(ul);

form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: PrintInvoice;
    if (type.value === 'invoice') {
        // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber); it can be replaced by a tuple
        doc = new Payment(...values);
    } else {
        // doc = new Payment(tofrom.value, details.value, amount.valueAsNumber) it can be replaced by tuple
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
})


const person: any = {};
console.log(person.speak()); // left here to check the console for debugging

// tuples:
let arr = ['John', 30, false];
arr[0] = true;
arr = [false, 'john', 30, true];

let tup: [string, number, boolean] = ['John', 30, false];
tup[0] = 'Jill';
// tup[1] = false; // givs error as second element should be of type number

// tup = [false, 'John', 30]; / gives error as it is does not match the tup
