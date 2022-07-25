//* Falta completar el código para que funcione el ejercicio
function contains(store, product) {
    const producto = JSON.stringify(store);
    const regex = new RegExp(`/${product}/`);
    console.log(producto.match(regex));
}

const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
  }

const otroAlmacen = {
    'baul': {
      'fondo': {
        'objeto': 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando'
      }
    }
}

console.log(contains(almacen, 'mando'))
console.log(contains(otroAlmacen, 'cd-rom'))
