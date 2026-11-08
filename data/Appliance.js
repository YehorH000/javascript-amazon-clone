import { Product } from './Product.js'

export class Appliance extends Product {
    instructionsLink
    warrantyLink

    constructor(productDetails) {
        super(productDetails)
        this.instructionsLink = productDetails.instructionsLink
        this.warrantyLink = productDetails.warrantyLink
    }

    extraInfoHTML() {
        return `<a href="${this.instructionsLink}" target="_blank">Instructions</a> \n <a href="${this.warrantyLink}" target="_blank">Warranty</a>`
    }
}
