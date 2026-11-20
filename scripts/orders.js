import { orders, clearOrders } from '../data/orders.js'
import { products, loadProductsFetch } from '../data/products.js'
import { formatCurrency } from './utils/money.js'
import { addToCart, updateCartQuantity } from '../data/cart.js'

async function initOrdersPage() {
    try {
        await loadProductsFetch()
        renderOrders()
        updateCartQuantity()
    } catch (error) {
        console.error('Products disappeared:', error)
        document.querySelector('.js-order-summary').textContent = 'Reload page.'
    }
}

initOrdersPage()

function renderOrders() {
    let ordersHTML = ''

    orders.forEach((order) => {
        let productsHTML = ''
        order.products.forEach((orderElement) => {
            const currentProduct = products.find(
                (product) => orderElement.productId === product.id,
            )

            productsHTML += `
            <div class="product-image-container">
                <img
                    src="${currentProduct.image}"
                />
            </div>

            <div class="product-details">
                <div class="product-name">
                    ${currentProduct.name}
                </div>
                <div class="product-delivery-date">
                    ${formateDate(orderElement.estimatedDeliveryTime)}
                </div>
                <div class="product-quantity">Quantity: ${orderElement.quantity}</div>
                <button class="buy-again-button button-primary js-buy-again-button" data-product-id="${orderElement.productId}">
                    <img
                        class="buy-again-icon"
                        src="images/icons/buy-again.png"
                    />
                    <span class="buy-again-message"
                        >Buy it again</span
                    >
                </button>
            </div>

            <div class="product-actions">
                <a >
                    <button
                        class="track-package-button js-track-package-button button-secondary" data-product-id="${orderElement.productId}" data-order-id="${order.id}"
                    >
                        Track package
                    </button>
                </a>
            </div>
            `
        })

        ordersHTML += `
        <div class="order-container">
            <div class="order-header">
                <div class="order-header-left-section">
                    <div class="order-date">
                        <div class="order-header-label">
                            Order Placed:
                        </div>
                        <div>${formateDate(order.orderTime)}</div>
                    </div>
                    <div class="order-total">
                        <div class="order-header-label">Total:</div>
                        <div>${formatCurrency(order.totalCostCents)}</div>
                    </div>
                </div>

                <div class="order-header-right-section">
                    <div class="order-header-label">Order ID:</div>
                    <div>${order.id}</div>
                </div>
            </div>

            <div class="order-details-grid">${productsHTML}</div>
        </div>
        `
    })

    document.querySelector('.js-orders-grid').innerHTML = ordersHTML

    document.querySelectorAll('.js-buy-again-button').forEach((element) => {
        element.addEventListener('click', () => {
            addToCart(element.dataset.productId)
            updateCartQuantity()
        })
    })

    document.querySelectorAll('.js-track-package-button').forEach((element) => {
        element.addEventListener('click', () => {
            const url = new URL('tracking.html', window.location.origin)
            url.searchParams.set('orderId', element.dataset.orderId)
            url.searchParams.set('productId', element.dataset.productId)
            console.log(url)
            window.location.href = url.href
        })
    })
}

function formateDate(orderTime) {
    const date = new Date(orderTime)
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
    })

    return formattedDate
}

document.querySelector('.js-clean-orders-btn').addEventListener('click', () => {
    clearOrders()
    renderOrders()
})
