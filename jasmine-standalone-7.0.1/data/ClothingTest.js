import { Clothing } from '../../data/Clothing.js'

describe('test suite Clothing class:', () => {
    const details = {
        id: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
        image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        name: 'Adults Plain Cotton T-Shirt - 2 Pack',
        rating: {
            stars: 4.5,
            count: 56,
        },
        priceCents: 799,
        keywords: ['tshirts', 'apparel', 'mens'],
        type: 'clothing',
        sizeChartLink: 'images/clothing-size-chart.png',
    }

    const product = new Clothing(details)

    it('Saving of main data:', () => {
        expect(product.id).toBe(details.id)
        expect(product.image).toBe(details.image)
        expect(product.name).toBe(details.name)
        expect(product.rating).toEqual(details.rating)
        expect(product.priceCents).toBe(details.priceCents)
        expect(product.sizeChartLink).toBe(details.sizeChartLink)
    })

    it('Rendering of extra info HTML:', () => {
        expect(product.extraInfoHTML()).toContain(product.sizeChartLink)
    })
})
