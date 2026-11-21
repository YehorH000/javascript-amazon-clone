export function formateDate(orderTime) {
    const date = new Date(orderTime)
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
    })

    return formattedDate
}

export function countTimeToDelivery(orderDetails, productDetails) {
    const currentTime = Date.now()
    const orderTime = new Date(orderDetails.orderTime).getTime()
    const deliveryTime = new Date(
        productDetails.estimatedDeliveryTime,
    ).getTime()
    const calcOrderProgress =
        ((currentTime - orderTime) / (deliveryTime - orderTime)) * 100
    return calcOrderProgress
}
