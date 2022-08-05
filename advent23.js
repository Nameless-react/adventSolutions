export default function canReconfigure(from, to) {
    if (from.length !== to.length) return false;
    const map = new Map();
    const fromArray = Array.from(from)
    const toArray = Array.from(to);

    return fromArray.every((letter, index) => {
        if (map.has(letter) && map.get(letter) !== toArray[index] || map.has(toArray[index]) && map.get(toArray[index]) !== letter) return false
        
        map.set(letter, toArray[index]);
        map.set(toArray[index], letter);
        return true
    })
}