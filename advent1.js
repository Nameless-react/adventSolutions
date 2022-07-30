export default function contarOvejas(ovejas) {
    const ovejasFiltradas = ovejas.filter(oveja => oveja.color === "rojo" && oveja.name.match(/(?=.*a)(?=.*n)/i));
    return ovejasFiltradas
}

