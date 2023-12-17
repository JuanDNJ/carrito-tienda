function sortByPriceMinor(productA, productB) {
    return productA.price - productB.price
}
function sortByPriceElderly(productA, productB) {
    return productB.price - productA.price
}
function capitalizeWord(word) {
    const letter = word.trim().toLowerCase()
    const firstChar = letter.charAt(0).toUpperCase()
    return firstChar + letter.slice(1)
}
function calculateThePorcentage(price, porcentage) {
    const calc = price * (porcentage / 100)
    return Math.round((price - calc) * 100) / 100
}
function totalPriceProduc(price, quantity) {
    return Math.round((price * quantity) * 100) / 100
}
function totalPriceCart(cart) {
    const newCartReduce = cart.reduce((A, B) => [...A, B.price * B.quantity], [])
    const total = newCartReduce.reduce((A, B) => A + B, 0)
    return Math.round(total * 100) / 100
}
export {
    sortByPriceMinor,
    sortByPriceElderly,
    capitalizeWord,
    calculateThePorcentage,
    totalPriceProduc,
    totalPriceCart
}