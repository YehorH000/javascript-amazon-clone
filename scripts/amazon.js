import { cart, addToCart, getCartQuantity } from '../data/cart.js'
import { products, loadProductsFetch } from '../data/products.js'
// import { formatCurrency } from './utils/money.js'

// loadProductsFetch().then(() => {
//     renderProductsGrid()
// })

async function initAmazonPage() {
    try {
        await loadProductsFetch()
        renderProductsGrid()
    } catch (error) {
        console.error('Products disappeared:', error)
        document.querySelector('.js-order-summary').textContent = 'Reload page.'
    }
}

initAmazonPage()

function renderProductsGrid() {
    let productsHTML = ''

    products.forEach((product) => {
        productsHTML += `
    <div class="product-container">
        <div class="product-image-container">
            <img
                class="product-image"
                src="${product.image}"
            />
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${product.name}
        </div>

        <div class="product-rating-container">
            <img
                class="product-rating-stars"
                src="${product.getStarsUrl()}"
            />
            <div class="product-rating-count link-primary">${product.rating.count}</div>
        </div>

        <div class="product-price">${product.getPrice()}</div>

        <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>

        ${product.extraInfoHTML()}

        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png" />
            Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
        </button>
    </div>
    `
    })

    document.querySelector('.js-products-grid').innerHTML = productsHTML

    let cartHTML = ''
    let timeoutId

    updateCartQuantity()

    function updateCartQuantity() {
        document.querySelector('.js-cart-quantity').innerHTML =
            getCartQuantity() || ''
        // console.log(getCartQuantity())
    }

    function updateCartNotification(productId) {
        const addedMesNotification = document.querySelector(
            `.js-added-to-cart-${productId}`,
        )
        addedMesNotification.classList.add('is-visible')
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            addedMesNotification.classList.remove('is-visible')
        }, 2000)
    }

    document.querySelectorAll('.js-add-to-cart').forEach((button) => {
        button.addEventListener('click', () => {
            // console.log(button.dataset.productName)
            // const productId = button.dataset.productId
            const { productId } = button.dataset

            addToCart(productId)
            updateCartQuantity()
            updateCartNotification(productId)

            console.log(cart)
        })
    })
}
