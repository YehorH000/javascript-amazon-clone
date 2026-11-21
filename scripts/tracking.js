import { orders } from '../data/orders.js'
import { products, loadProductsFetch } from '../data/products.js'
import { formateDate, countTimeToDelivery } from './utils/time.js'

const url = new URL(window.location.href)
const orderId = url.searchParams.get('orderId')
const productId = url.searchParams.get('productId')
let currentOrder
let currentProduct
let currentProductInfo

async function initTrackingPage() {
    try {
        await loadProductsFetch()
        findTrackingDetails()
        const calcOrderProgress = countTimeToDelivery(
            currentOrder,
            currentProduct,
        )

        document.querySelector('.progress-bar').style.width =
            `${calcOrderProgress}%`

        renderProgressLabels(calcOrderProgress)

        renderProduct()
    } catch (error) {
        console.error('Error appeared:', error)
    }
}

initTrackingPage()

function findTrackingDetails() {
    currentOrder = orders.find((order) => orderId === order.id)
    currentProduct = currentOrder.products.find(
        (product) => productId === product.productId,
    )
    currentProductInfo = products.find(
        (product) => currentProduct.productId === product.id,
    )
}

function renderProduct() {
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

    // console.log(currentProduct)
}

function renderProgressLabels(calcOrderProgress) {
    const progressLabels = `
    <div class="progress-label ${calcOrderProgress <= 49 ? 'current-status' : ''}">Preparing</div>
    <div class="progress-label ${calcOrderProgress > 49 && calcOrderProgress < 100 ? 'current-status' : ''}">Shipped</div>
    <div class="progress-label ${calcOrderProgress === 100 ? 'current-status' : ''}">Delivered</div>
    `
    document.querySelector('.js-progress-labels-container').innerHTML =
        progressLabels
}
