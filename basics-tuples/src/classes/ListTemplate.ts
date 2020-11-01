/*
1. register a list container (ul) in the constructor
2. create a render method to render a new 'Li' to the container
    -- accepts arguments: invoice or payment, a heading, a position
    -- create the html template (li, h4, p)
    -- add the 'Li' template to the start/end of the list
*/

import { PrintInvoice } from "../interfaces/PrintInvoice.js";

export class ListeTemplate {
    constructor(
        private container: HTMLUListElement 
    ){}


    render(item: PrintInvoice, heading: string, position: 'start' | 'end'){
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.printInvoice();
        li.append(p);

        if (position === 'start') {
            this.container.prepend(li)
        } else {
            this.container.append(li);
        }
    }
}