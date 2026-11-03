import { renderOrderSummary } from './checkout/orderSummary.js'
import { renderPaymentSummary } from './checkout/paymentSummary.js'
import { updateCartQuantity } from './checkout/checkoutHeader.js'

renderOrderSummary()
renderPaymentSummary()
updateCartQuantity()
