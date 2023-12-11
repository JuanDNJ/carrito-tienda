function ordenarMayorAmenor(a, b) {
    return b.leaguePoints - a.leaguePoints
}

function capitalizeWord(word) {
    const letter = word.trim().toLowerCase()
    const firstChar = letter.charAt(0).toUpperCase()
    return firstChar + letter.slice(1)
}

export {
    ordenarMayorAmenor,
    capitalizeWord
}