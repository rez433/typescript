import { ListeTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
/* type casting */
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListeTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber); it can be replaced by a tuple
        doc = new Payment(...values);
    }
    else {
        // doc = new Payment(tofrom.value, details.value, amount.valueAsNumber) it can be replaced by tuple
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// tuples:
let arr = ['John', 30, false];
arr[0] = true;
arr = [false, 'john', 30, true];
let tup = ['John', 30, false];
tup[0] = 'Jill';
// tup[1] = false; // givs error as second element should be of type number
// tup = [false, 'John', 30]; / gives error as it is does not match the tup
