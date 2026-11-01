import {
    cart,
    removeFromCart,
    getCartQuantity,
    saveToStorage,
} from '../data/cart.js'
import { products } from '../data/products.js'
import { formatCurrency } from './utils/money.js'

let productsInCartHTML = ''

cart.forEach((item) => {
    const element = products.find((product) => product.id === item.id)
    productsInCartHTML += `
    <div class="cart-item-container js-cart-item-container js-cart-item-container-${element.id}" data-product-id="${element.id}">
        <div class="delivery-date">
            Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
            <img
                class="product-image"
                src="${element.image}"
            />

            <div class="cart-item-details">
                <div class="product-name">
                    ${element.name}
                </div>
                <div class="product-price">$${formatCurrency(element.priceCents)}</div>
                <div class="product-quantity">
                    <span>
                        Quantity:
                        <span class="quantity-label js-quantity-label">${item.quantity}</span>
                    </span>
                    <span
                        class="update-quantity-link link-primary js-update-quantity-link" data-product-id="${element.id}"
                    >
                        Update
                    </span>
                    <input class="save-quantity-input js-save-quantity-input" data-product-id="${element.id}" >
                    <span class="js-save-quantity-link save-quantity-link link-primary" data-product-id="${element.id}">Save</span>
                    <span
                        class="delete-quantity-link link-primary js-delete-link" data-product-id="${element.id}"
                    >
                        Delete
                    </span>
                </div>
            </div>

            <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                <div class="delivery-option">
                    <input
                        type="radio"
                        checked
                        class="delivery-option-input"
                        name="delivery-option-${element.id}"
                    />
                    <div>
                        <div class="delivery-option-date">
                            Tuesday, June 21
                        </div>
                        <div class="delivery-option-price">
                            FREE Shipping
                        </div>
                    </div>
                </div>
                <div class="delivery-option">
                    <input
                        type="radio"
                        class="delivery-option-input"
                        name="delivery-option-${element.id}"
                    />
                    <div>
                        <div class="delivery-option-date">
                            Wednesday, June 15
                        </div>
                        <div class="delivery-option-price">
                            $4.99 - Shipping
                        </div>
                    </div>
                </div>
                <div class="delivery-option">
                    <input
                        type="radio"
                        class="delivery-option-input"
                        name="delivery-option-${element.id}"
                    />
                    <div>
                        <div class="delivery-option-date">
                            Monday, June 13
                        </div>
                        <div class="delivery-option-price">
                            $9.99 - Shipping
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
})

document.querySelector('.js-order-summary').innerHTML = productsInCartHTML

// Old method with many Listeners
// document.querySelectorAll('.js-delete-link').forEach((link) => {
//     link.addEventListener('click', (event) => {
//         const productId = link.dataset.productId
//         // cart.splice(productId, 1)
//         removeFromCart(productId)

//         const container = document.querySelector(
//             `.js-cart-item-container-${productId}`,
//         )
//         container.remove()
//         updateCartQuantity()
//     })
// })

// document.querySelectorAll('.js-update-quantity-link').forEach((link) => {
//     link.addEventListener('click', (event) => {
//         let productId = link.dataset.productId

//         document
//             .querySelector(`.js-cart-item-container-${productId}`)
//             .classList.add('is-edititing-quantity')
//     })
// })

// document.querySelectorAll('.js-save-quantity-link').forEach((link) => {
//     link.addEventListener('click', () => {
//         const productId = link.dataset.productId
//         saveQuantity(productId, link)

//         document
//             .querySelector(`.js-cart-item-container-${productId}`)
//             .classList.remove('is-edititing-quantity')
//     })
// })

// document.querySelectorAll('.js-save-quantity-input').forEach((link) => {
//     link.addEventListener('keydown', (event) => {
//         const productId = link.dataset.productId
//         if (event.key == 'Enter') {
//             saveQuantity(productId, link)
//             console.log(link)
//         }
//     })
// })

// One listner pro one card
// document.querySelectorAll('.js-cart-item-container').forEach((item) => {
//     const productId = item.dataset.productId
//     item.addEventListener('click', (event) => {
//         // console.log(event.target.classList)

//         if (event.target.classList.contains('js-delete-link')) {
//             removeFromCart(productId)

//             const container = document.querySelector(
//                 `.js-cart-item-container-${productId}`,
//             )
//             container.remove()
//             updateCartQuantity()
//         } else if (event.target.classList.contains('js-update-quantity-link')) {
//             document
//                 .querySelector(`.js-cart-item-container-${productId}`)
//                 .classList.add('is-edititing-quantity')
//         } else if (event.target.classList.contains('js-save-quantity-link')) {
//             saveQuantity(productId, item)

//             document
//                 .querySelector(`.js-cart-item-container-${productId}`)
//                 .classList.remove('is-edititing-quantity')
//         }
//     })
//     item.addEventListener('keydown', (event) => {
//         if (event.target.classList.contains('js-save-quantity-input')) {
//             if (event.key == 'Enter') {
//                 saveQuantity(productId, item)
//                 // console.log(item)
//             }
//         }
//     })
// })

const orderSummary = document.querySelector('.js-order-summary')

orderSummary.addEventListener('click', (event) => {
    const container = event.target.closest('.cart-item-container')
    const productId = container.dataset.productId

    if (!container) return

    if (event.target.classList.contains('js-delete-link')) {
        removeFromCart(productId)

        // const container = document.querySelector(
        //     `.js-cart-item-container-${productId}`,
        // )
        container.remove()
        updateCartQuantity()
    } else if (event.target.classList.contains('js-update-quantity-link')) {
        container.classList.add('is-edititing-quantity')
    } else if (event.target.classList.contains('js-save-quantity-link')) {
        saveQuantity(productId, container)

        container.classList.remove('is-edititing-quantity')
    }

    // console.log(container)
})

orderSummary.addEventListener('keydown', (event) => {
    const container = event.target.closest('.cart-item-container')
    const productId = container.dataset.productId
    if (!container) return

    if (event.target.classList.contains('js-save-quantity-input')) {
        if (event.key == 'Enter') {
            saveQuantity(productId, container)
            // console.log(item)
        }
    }
})

updateCartQuantity()
function updateCartQuantity() {
    document.querySelector('.js-header-products-quantity').innerHTML =
        `${getCartQuantity()} items`
}

function saveQuantity(productId, link) {
    const container = link.closest('.cart-item-container')
    const input = container.querySelector('.js-save-quantity-input')
    const cartItem = cart.find((item) => item.id === productId)
    const quantity = Number(input.value)
    console.log(input.value)

    if (!cartItem) {
        console.error(`Товар с ID ${productId} не найден в корзине!`)
        return
    }

    if (quantity !== undefined && quantity > 0 && quantity <= 1000) {
        cartItem.quantity = quantity
        saveToStorage()

        container.querySelector('.js-quantity-label').textContent = quantity
        updateCartQuantity()
        input.value = ''
    }
}
