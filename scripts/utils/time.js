export function formateDate(orderTime) {
    const date = new Date(orderTime)
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
    })

    return formattedDate
}
