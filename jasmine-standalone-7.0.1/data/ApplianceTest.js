import { Appliance } from '../../data/Appliance.js'

describe('test suite Appliance class', () => {
    const details = {
        id: '54e0eccd-8f36-462b-b68a-8182611d9add',
        image: 'images/products/black-2-slot-toaster.jpg',
        name: '2 Slot Toaster - Black',
        rating: {
            stars: 5,
            count: 2197,
        },
        priceCents: 1899,
        // keywords: ['toaster', 'kitchen', 'appliances'],
        // type: 'appliances',
        instructionsLink: 'images/appliance-instructions.png',
        warrantyLink: 'images/appliance-warranty.png',
    }

    const product = new Appliance(details)

    it('Save of main data:', () => {
        expect(product.id).toBe(details.id)
        expect(product.image).toBe(details.image)
        expect(product.name).toBe(details.name)
        expect(product.rating).toEqual(details.rating)
        expect(product.priceCents).toBe(details.priceCents)
        expect(product.instructionsLink).toBe(details.instructionsLink)
        expect(product.warrantyLink).toBe(details.warrantyLink)
    })

    it('Rendering of extra info HTML:', () => {
        expect(product.extraInfoHTML()).toContain(product.instructionsLink)
        expect(product.extraInfoHTML()).toContain(product.warrantyLink)
    })
})
