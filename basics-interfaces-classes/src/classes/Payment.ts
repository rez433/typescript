import { PrintInvoice } from '../interfaces/PrintInvoice.js';

export class Payment implements PrintInvoice{
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ){}


    printInvoice() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }

}