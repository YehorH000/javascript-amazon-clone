export const cart = []

export function addToCart(productId) {
    const element = cart.find((item) => item.productId === productId)
    const selectorQuantity = document.querySelector(
        `.js-quantity-selector-${productId}`,
    ).value
    if (element) {
        element.quantity += Number(selectorQuantity)
    } else {
        cart.push({ productId, quantity: 1 })
    }
}
