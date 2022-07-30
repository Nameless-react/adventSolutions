export default function isValid(letter) {
    if (letter.match(/[\[\]\{\}]+/g)) return false
    const valid = letter.match(/\([\wÀ-ÿ]*?\)/gi)
    if (valid) {
        return valid[0] === "()" ? false : true
    }
    return false
}

