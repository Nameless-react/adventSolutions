function contarOvejas(ovejas) {
    const ovejasFiltradas = ovejas.filter(oveja => oveja.color === "rojo" && oveja.name.match(/(?=.*a)(?=.*n)/i));
    return ovejasFiltradas
}

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]

console.log(contarOvejas(ovejas))