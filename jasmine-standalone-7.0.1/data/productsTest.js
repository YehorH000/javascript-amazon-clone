import { products } from '../../data/products.js'
import { Product } from '../../data/Product.js'
import { Appliance } from '../../data/Appliance.js'
import { Clothing } from '../../data/Clothing.js'

describe('products catalog mapping:', () => {
    it('creates a Product for a regular catalog item', () => {
        const product = products.find(
            (item) => item.id === 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        )

        expect(product).toBeDefined()
        expect(product.constructor).toBe(Product)
    })

    it('creates Clothing for a clothing catalog item', () => {
        const product = products.find(
            (item) => item.id === '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
        )

        expect(product).toEqual(jasmine.any(Clothing))
    })

    it('creates Appliance for an appliance catalog item', () => {
        const product = products.find(
            (item) => item.id === '54e0eccd-8f36-462b-b68a-8182611d9add',
        )

        expect(product).toEqual(jasmine.any(Appliance))
    })
})
