export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    printInvoice() {
        return `${this.client} ows $${this.amount} for ${this.details}`;
    }
}
