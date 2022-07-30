import { it, expect } from "vitest";
import contarOvejas from "../advent1";


it("Get the red sheeps that has a name that contains both the letter 'n' and 'a'", () => {
    const ovejas = [
        { name: 'Noa', color: 'azul' },
        { name: 'Euge', color: 'rojo' },
        { name: 'Navidad', color: 'rojo' },
        { name: 'Ki Na Ma', color: 'rojo'},
        { name: 'AAAAAaaaaa', color: 'rojo' },
        { name: 'Nnnnnnnn', color: 'rojo'}
    ]
    expect(contarOvejas(ovejas)).toMatchObject([
    { 
        name: 'Navidad',
        color: 'rojo' 
    },
    {
        name: 'Ki Na Ma',
        color: 'rojo' 
    }
    ]);
})

