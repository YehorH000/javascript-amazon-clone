import { Product } from '../../data/Product.js'

describe('test suite Product class:', () => {
    const details = {
        id: 'product-1',
        image: 'images/products/example.jpg',
        name: 'Example product',
        rating: { stars: 4.5, count: 10 },
        priceCents: 1090,
    }

    const product = new Product(details)

    it('Saving of main data', () => {
        expect(product.id).toEqual(details.id)
        expect(product.image).toBe(details.image)
        expect(product.name).toBe(details.name)
        expect(product.rating).toEqual(details.rating)
        expect(product.priceCents).toBe(details.priceCents)
    })

    it('return URL of rating image:', () => {
        expect(product.getStarsUrl()).toBe('images/ratings/rating-45.png')
    })

    it('convert Cents to Dollars:', () => {
        expect(product.getPrice()).toBe('$10.90')
    })

    it('return empty string for extra info for elements withou it:', () => {
        expect(product.extraInfoHTML()).toBe('')
    })
})
