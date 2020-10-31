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
class Invoice {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}


    printInvoice() {
        return `${this.client} ows $${this.amount} for ${this.details}`
    }

}


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