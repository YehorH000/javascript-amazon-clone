import { renderOrderSummary } from './checkout/orderSummary.js'
import { renderPaymentSummary } from './checkout/paymentSummary.js'
import { updateCartQuantity } from './checkout/checkoutHeader.js'
import { loadProductsFetch } from '../data/products.js'

// import '../data/backend-practice.js'
// import '../data/car.js'
// import '../data/cart-class.js'

// loadProductsFetch().then(() => {
//     renderPaymentSummary()
//     renderOrderSummary()
// })

async function initCheckoutPage() {
    updateCartQuantity()

    try {
        await loadProductsFetch()
        renderPaymentSummary()
        renderOrderSummary()
    } catch (error) {
        console.error('Products disappeared:', error)
        document.querySelector('.js-order-summary').textContent = 'Reload page.'
    }
}

initCheckoutPage()

// loadProducts(renderPaymentSummary)
// loadProducts(renderOrderSummary)

updateCartQuantity()
