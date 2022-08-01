import { it, expect } from "vitest";
import contains from "../advent7";

it("", () => {
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
            'producto2': 'camiseta',  // <- ¡Está aquí!
          }
        }
      }
      expect(contains(almacen, 'camiseta')).toBe(true);
})

it("", () => {
    const otroAlmacen = {
        'baul': {
          'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
          }
        }
    }
    expect(contains(otroAlmacen, 'gameboy')).toBe(false);
})