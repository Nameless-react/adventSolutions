import { it, expect } from "vitest";
import sumPairs from "../advent6";


it("Get the number of the second parameter with the sum of the numbers of the array", () => {
    expect(sumPairs([1, 2, 3, 4, 5], 4)).toEqual([1, 3]) 
    expect(sumPairs([3, 5, 7, 2], 10)).toEqual([3, 7])
    expect(sumPairs([-3, -2, 7, -5], 10)).toBe(null)
    expect(sumPairs([2, 2, 3, 1], 4)).toEqual([2, 2])
    expect(sumPairs([6, 7, 1, 2], 8)).toEqual([6, 2]) 
    expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toEqual([1, 5])
})
