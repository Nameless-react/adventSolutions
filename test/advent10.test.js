import { it, expect } from "vitest";
import getCoins from "../advent10";

it("Get the equivalent of the parameter in the amount of different coins", () => {
    expect(getCoins(12)).toEqual([0, 1, 0, 1, 0, 0]);
    expect(getCoins(51)).toEqual([1, 0, 0, 0, 0, 1]);
    expect(getCoins(3)).toEqual([1, 1, 0, 0, 0, 0]); 
    expect(getCoins(5)).toEqual([0, 0, 1, 0, 0, 0]);
    expect(getCoins(16)).toEqual([1, 0, 1, 1, 0, 0]);
    expect(getCoins(100)).toEqual([0, 0, 0, 0, 0, 2]); 
})
