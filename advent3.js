function isValid(letter) {
    if (letter.match(/[\[\]\{\}]+/g)) return false
    const valid = letter.match(/\([\wÀ-ÿ]*?\)/gi)
    if (valid) {
        return valid[0] === "()" ? false : true
    }
    return false
}

const carta = "bici coche (balón) bici coche peluche"
console.log(isValid(carta))

const carta2 = "() bici"
console.log(isValid(carta2))

const carta3 = "(peluche {) bici"
console.log(isValid(carta3))

const carta4 = "bici coche (balón bici coche"
console.log(isValid(carta4))

const carta5 = "peluche (bici [coche) bici coche balón"
console.log(isValid(carta5))

const carta6 = "(muñeca) consola bici"
console.log(isValid(carta6))

const carta7 = ")bici( casa play" 
console.log(isValid(carta7))