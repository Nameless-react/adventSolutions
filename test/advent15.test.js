import { it, expect } from "vitest";
import checkSledJump from "../advent15";


it("should get a true or false if the numbers get up until the max and go down", () => {
    expect(checkSledJump([1, 2, 3, 2, 1])).toBe(true);
    expect(checkSledJump([2, 4, 4, 6, 2])).toBe(false);
    expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toBe(false);
})