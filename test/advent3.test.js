import { it, expect } from 'vitest';
import isValid from '../advent3';

it("Validate the letters if the parenthesis close, has something inside and does not have open brakets or curly brakets inside", () => {
    const carta = "bici coche (balón) bici coche peluche"
    expect(isValid(carta)).toBe(true);

    const carta2 = "() bici"
    expect(isValid(carta2)).toBe(false);

    const carta3 = "(peluche {) bici"
    expect(isValid(carta3)).toBe(false);

    const carta4 = "bici coche (balón bici coche"
    expect(isValid(carta4)).toBe(false);

    const carta5 = "peluche (bici [coche) bici coche balón"
    expect(isValid(carta5)).toBe(false);

    const carta6 = "(muñeca) consola bici"
    expect(isValid(carta6)).toBe(true);

    const carta7 = ")bici( casa play" 
    expect(isValid(carta7)).toBe(false);
})