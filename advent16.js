export default function decodeNumber(symbols) {
    let operacion = 0
    const listSymbols = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100
    }
    if (symbols.length === 1) return listSymbols[symbols]
   
    if (Array.from(symbols).some(symbol => !Object.keys(listSymbols).includes(symbol))) return NaN

    for (let i = 0; i < symbols.length; i++) {
        if (listSymbols[symbols[i]] < listSymbols[symbols[i + 1]]) {
            operacion -= listSymbols[symbols[i]] 
        } else {
            operacion += listSymbols[symbols[i]]
        }
    }

    return operacion
}
