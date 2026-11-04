import { addToCart, cart } from '../../data/cart.js'

describe('test suite: addToCart', () => {
    let originalGetItem
    let originalSetItem

    beforeEach(() => {
        const container = document.createElement('div')
        container.className = 'js-test-container'
        container.innerHTML = `
            <select class="js-quantity-selector-e43638ce-6aa0-4b85-b27f-e1d07eb678c6">
                <option value="1" selected>1</option>
            </select>
        `
        document.body.appendChild(container)

        originalGetItem = localStorage.getItem
        originalSetItem = localStorage.setItem

        localStorage.getItem = () => JSON.stringify([])
        localStorage.setItem = () => {}
    })

    afterEach(() => {
        const container = document.querySelector('.js-test-container')
        if (container) {
            container.remove()
        }

        localStorage.getItem = originalGetItem
        localStorage.setItem = originalSetItem
    })

    it('adds non existing product to the cart', () => {
        cart.length = 0

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')

        expect(cart.length).toEqual(1)
    })
})
