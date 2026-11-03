import { getCartQuantity } from '../../data/cart.js'

export function updateCartQuantity() {
    document.querySelector('.js-header-products-quantity').innerHTML =
        `${getCartQuantity()} items`
}
