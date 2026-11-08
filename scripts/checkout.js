import { renderOrderSummary } from './checkout/orderSummary.js'
import { renderPaymentSummary } from './checkout/paymentSummary.js'
import { updateCartQuantity } from './checkout/checkoutHeader.js'
import { loadProducts } from '../data/products.js'

// import '../data/backend-practice.js'
// import '../data/car.js'
// import '../data/cart-class.js'

new Promise((resolve) => {
    loadProducts(() => {
        resolve()
    })
}).then(() => {
    renderPaymentSummary()
    renderOrderSummary()
})

// loadProducts(renderPaymentSummary)
// loadProducts(renderOrderSummary)

updateCartQuantity()
