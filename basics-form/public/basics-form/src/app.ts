// const anchor = document.querySelector('a'); // gives error "Object is possible 'null'"

// const anchor = document.querySelector('a')!;

// console.log(anchor.href);



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