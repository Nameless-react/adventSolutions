import { it, expect } from "vitest";
import maxProfit from "../advent8";


it("Get the max profits between the greater and lowest numbers, from left to right", () => {
    expect(maxProfit([39, 18, 29, 25, 34, 32, 5])).toBe(16)
    expect(maxProfit([10, 20, 30, 40, 50, 60, 70])).toBe(60)
    expect(maxProfit([18, 15, 12, 11, 9, 7])).toBe(-1)
    expect(maxProfit([3, 3, 3, 3, 3])).toBe(-1)
})

