import { orders } from '../data/orders.js'
import { products, loadProductsFetch } from '../data/products.js'
import { formateDate } from './utils/time.js'

const url = new URL(window.location.href)
const orderId = url.searchParams.get('orderId')
const productId = url.searchParams.get('productId')

async function initTrackingPage() {
    try {
        await loadProductsFetch()
        renderProduct()
    } catch (error) {
        console.error('Products disappeared:', error)
    }
}

initTrackingPage()

function renderProduct() {
    const currentOrder = orders.find((order) => orderId === order.id)
    const currentProduct = currentOrder.products.find(
        (product) => productId === product.productId,
    )
    const currentProductInfo = products.find(
        (product) => currentProduct.productId === product.id,
    )

    const productHTML = `
    <div class="delivery-date js-delivery-date">
        Arriving on ${formateDate(currentProduct.estimatedDeliveryTime)}
    </div>

    <div class="product-info js-product-info">${currentProductInfo.name}</div>

    <div class="product-info">Quantity: ${currentProduct.quantity}</div>

    <img
        class="product-image"
        src="${currentProductInfo.image}"
    />
    `
    document.querySelector('.js-product-container').innerHTML = productHTML

    console.log(currentProduct)
}
