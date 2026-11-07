class Cart {
    localStorageKey
    cartItems = JSON.parse(localStorage.getItem(this.localStorageKey)) || []

    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey
    }

    addToCart(productId) {
        const element = this.cartItems.find((item) => item.id === productId)
        const selectorQuantity =
            document.querySelector(`.js-quantity-selector-${productId}`)
                ?.value || 1
        if (element) {
            element.quantity += Number(selectorQuantity)
        } else {
            this.cartItems.push({
                id: productId,
                quantity: Number(selectorQuantity),
                deliveryOptionId: '1',
            })
        }

        this.saveToStorage()
    }
    addToCart(productId) {
        const element = this.cartItems.find((item) => item.id === productId)
        const selectorQuantity =
            document.querySelector(`.js-quantity-selector-${productId}`)
                ?.value || 1
        if (element) {
            element.quantity += Number(selectorQuantity)
        } else {
            this.cartItems.push({
                id: productId,
                quantity: Number(selectorQuantity),
                deliveryOptionId: '1',
            })
        }

        this.saveToStorage()
    }
    removeFromCart(productId) {
        const newCart = []
        this.cartItems.forEach((cartItem) => {
            if (cartItem.id !== productId) {
                newCart.push(cartItem)
            }
        })
        this.cartItems = newCart
        this.saveToStorage()
    }
    saveToStorage() {
        localStorage.setItem(
            this.localStorageKey,
            JSON.stringify(this.cartItems),
        )
    }
    getCartQuantity() {
        let totalQuantity = 0
        for (const item of this.cartItems) {
            totalQuantity += item.quantity
        }
        return totalQuantity
    }
    updateDeliveryOption(productId, deliveryOptionId) {
        const deliveryProduct = this.cartItems.find(
            (product) => product.id === productId,
        )
        deliveryProduct.deliveryOptionId = deliveryOptionId
        this.saveToStorage()
    }
}

const cart = new Cart('cart-oop')
const businessCart = new Cart('cart-business')

cart.addToCart('15b6fc6f-327a-4ec4-896f-486349e85a3d')

console.log(cart)
console.log(businessCart)
