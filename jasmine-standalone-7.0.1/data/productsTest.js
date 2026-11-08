import { products, loadProducts } from '../../data/products.js'
import { Product } from '../../data/Product.js'
// import { Appliance } from '../../data/Appliance.js'
import { Clothing } from '../../data/Clothing.js'

describe('products catalog mapping:', () => {
    it('creates a Product and Clothing classes for a catalog item', (done) => {
        loadProducts(() => {
            const productRegular = products.find(
                (item) => item.id === 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            )

            expect(productRegular).toBeDefined()
            expect(productRegular.constructor).toBe(Product)

            const productClothing = products.find(
                (item) => item.id === '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
            )

            expect(productClothing).toEqual(jasmine.any(Clothing))

            done()
        })
        // const product = products.find(
        //     (item) => item.id === 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        // )

        // expect(product).toBeDefined()
        // expect(product.constructor).toBe(Product)
    })

    // it('creates Clothing for a clothing catalog item', () => {
    //     const product = products.find(
    //         (item) => item.id === '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
    //     )

    //     expect(product).toEqual(jasmine.any(Clothing))
    // })

    // it('creates Appliance for an appliance catalog item', () => {
    //     const product = products.find(
    //         (item) => item.id === '54e0eccd-8f36-462b-b68a-8182611d9add',
    //     )

    //     expect(product).toEqual(jasmine.any(Appliance))
    // })
})
