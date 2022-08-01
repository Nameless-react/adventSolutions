import { it, expect } from "vitest";
import decodeNumber from "../advent16";

it("decode the symbols base in a object of numbers", () => {
    expect(decodeNumber('.,')).toBe(4)
    expect(decodeNumber(',.')).toBe(6)
    expect(decodeNumber(',...')).toBe(8)
    expect(decodeNumber(';.W')).toBe(NaN)
    expect(decodeNumber('.')).toBe(1)
})