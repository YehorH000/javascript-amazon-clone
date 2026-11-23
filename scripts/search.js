import { products } from '../data/products.js'

document.querySelector('.search-button').addEventListener('click', () => {
    createSearchURL()
})

document.querySelector('.search-bar').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        createSearchURL()
    }
})

function getSearchValue() {
    return document.querySelector('.search-bar').value
}

function createSearchURL() {
    const url = new URL('amazon.html', window.location.origin)
    url.searchParams.set('search', getSearchValue())
    window.location.href = url.href
}

export function filterProducts() {
    const url = new URL(window.location.href)
    const searchQuery = url.searchParams.get('search')
    if (!searchQuery) return products

    const normalizedSearchQuery = searchQuery.toLowerCase()

    document.querySelector('.search-bar').value = searchQuery

    return products.filter(
        (product) =>
            product.name.toLowerCase().includes(normalizedSearchQuery) ||
            product.keywords.some((keyword) => {
                return keyword.includes(normalizedSearchQuery)
            }),
    )
}
