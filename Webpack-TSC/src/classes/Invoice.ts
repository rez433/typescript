import { PrintInvoice } from '../interfaces/PrintInvoice.js';

export class Invoice implements PrintInvoice{
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}


    printInvoice() {
        return `${this.client} ows $${this.amount} for ${this.details}`
    }

}