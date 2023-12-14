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
    return Math.round(price - calc)
}
export {
    sortByPriceMinor,
    sortByPriceElderly,
    capitalizeWord,
    calculateThePorcentage
}