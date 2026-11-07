import { renderOrderSummary } from './checkout/orderSummary.js'
import { renderPaymentSummary } from './checkout/paymentSummary.js'
import { updateCartQuantity } from './checkout/checkoutHeader.js'
import '../data/cart-oop.js'

renderOrderSummary()
renderPaymentSummary()
updateCartQuantity()
