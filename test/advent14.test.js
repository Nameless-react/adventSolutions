import { it, expect } from "vitest";
import missingReindeer from "../advent14";


it("Find the lost reindeer", () => {
    expect(missingReindeer([5, 6, 1, 2, 3, 7, 0])).toBe(4)
    expect(missingReindeer([0, 1])).toBe(2)
    expect(missingReindeer([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 34, 33, 32, 47, 35, 36, 38, 37, 39, 40, 43, 32, 41, 44, 10, 46, 45])).toBe(42)
})