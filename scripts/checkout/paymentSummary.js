import { products } from '../../data/products.js'
import { addOrder } from '../../data/orders.js'
import { deliveryOptions } from '../../data/deliveryOptions.js'
import { cart, getCartQuantity } from '../../data/cart.js'
import { formatCurrency } from '../utils/money.js'

export function renderPaymentSummary() {
    let productsPrice = 0
    let shippingPrice = 0

    for (let productInCart of cart) {
        const product = products.find((item) => item.id === productInCart.id)
        const deliveryOption = deliveryOptions.find(
            (option) => option.id === productInCart.deliveryOptionId,
        )

        productsPrice += product.priceCents * productInCart.quantity
        shippingPrice += deliveryOption.priceCents
    }
    const totalPriceBeforeTax = productsPrice + shippingPrice
    const taxPrice = totalPriceBeforeTax / 10
    const totalPrice = totalPriceBeforeTax + taxPrice
    document.querySelector('.js-payment-summary-items').innerHTML =
        `Items (${getCartQuantity()}):`
    document.querySelector('.js-payment-summary-money-output').innerHTML =
        `$${formatCurrency(productsPrice)}`
    document.querySelector('.js-payment-money-shipping').innerHTML =
        `$${formatCurrency(shippingPrice)}`
    document.querySelector(
        '.js-payment-summary-totalprice-before-tax',
    ).innerHTML = `$${formatCurrency(totalPriceBeforeTax)}`
    document.querySelector('.js-payment-summary-tax-price').innerHTML =
        `$${formatCurrency(taxPrice)}`
    document.querySelector('.js-payment-summary-total-price').innerHTML =
        `$${formatCurrency(totalPrice)}`
}
// renderPaymentSummary()

function getOrderCart() {
    return cart.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        deliveryOptionId: item.deliveryOptionId,
    }))
}

document
    .querySelector('.js-place-order-button')
    .addEventListener('click', async () => {
        try {
            const response = await fetch(
                'https://supersimplebackend.dev/orders',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        cart: getOrderCart(),
                    }),
                },
            )
            const order = await response.json()
            // console.log(order)
            addOrder(order)
        } catch (error) {
            console.error(error)
        }

        window.location.href = 'orders.html'
    })
