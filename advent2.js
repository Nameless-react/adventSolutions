function listGifts(letter) {
    const carta = letter.trim().split(/\s+/g).filter(gift => gift != "" && !gift.match(/\_/));
    console.log(carta)
    let list = {}
    carta.forEach(gift => list[gift] = (list[gift] || 0) + 1);
    return list
}

const carta = 'bici coche balón _playstation bici coche peluche'
console.log(listGifts(carta))