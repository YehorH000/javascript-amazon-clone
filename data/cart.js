export let cart = JSON.parse(localStorage.getItem('cart')) || []
// || [
//     {
//         id: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//         image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//         name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//         rating: {
//             stars: 4.5,
//             count: 87,
//         },
//         priceCents: 1090,
//         keywords: ['socks', 'sports', 'apparel'],
//     },
//     {
//         id: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
//         image: 'images/products/intermediate-composite-basketball.jpg',
//         name: 'Intermediate Size Basketball',
//         rating: {
//             stars: 4,
//             count: 127,
//         },
//         priceCents: 2095,
//         keywords: ['sports', 'basketballs'],
//     },
// ]

export function addToCart(productId) {
    const element = cart.find((item) => item.id === productId)
    const nodeQuantity = document.querySelector(
        `.js-quantity-selector-${productId}`,
    )
    const selectorQuantity = nodeQuantity ? nodeQuantity.value : 1
    if (element) {
        element.quantity += Number(selectorQuantity)
    } else {
        cart.push({
            id: productId,
            quantity: Number(selectorQuantity),
            deliveryOptionId: '1',
        })
    }

    saveToStorage()
}

export function removeFromCart(productId) {
    const newCart = []
    cart.forEach((cartItem) => {
        if (cartItem.id !== productId) {
            newCart.push(cartItem)
        }
    })
    cart = newCart
    // console.log(JSON.stringify(cart))
    saveToStorage()
}

export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export function getCartQuantity() {
    let totalQuantity = 0
    for (const item of cart) {
        totalQuantity += item.quantity
    }
    return totalQuantity
}

export function updateDeliveryOption(productId, deliveryOptionId) {
    const deliveryProduct = cart.find((product) => product.id === productId)
    deliveryProduct.deliveryOptionId = deliveryOptionId
    saveToStorage()
    updateCartQuantity()
}

export function clearCart() {
    cart = []
    saveToStorage()
    updateCartQuantity()
}

export function updateCartQuantity() {
    const cartQuantityElement = document.querySelector('.js-cart-quantity')

    if (cartQuantityElement) {
        cartQuantityElement.innerHTML = getCartQuantity() || ''
    }
}
