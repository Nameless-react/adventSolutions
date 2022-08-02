import { it, expect } from "vitest";
import shouldBuyFidelity from "../advent11";

it("Check if is worthly buy the membership or not", () => {
    expect(shouldBuyFidelity(1)).toBe(false);
    expect(shouldBuyFidelity(3)).toBe(false);
    expect(shouldBuyFidelity(100)).toBe(true);
})