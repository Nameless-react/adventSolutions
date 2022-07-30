export default function listGifts(letter) {
    let list = {}
    const carta = letter.split(/\s+/).filter(gift => gift != "" && !gift.match(/\_/));
    carta.forEach(gift => list[gift] = (list[gift] || 0) + 1);
    return list
}


