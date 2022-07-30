import { it, expect } from "vitest";
import listGifts from "../advent2";

it("Get the gifts of the letter formatting the input with all the restrictions", () => {
    const carta = 'bici coche balón _playstation bici coche peluche';
    expect(listGifts(carta)).toEqual({
        bici: 2,
        coche: 2,
        balón: 1,
        peluche: 1
    });
});

