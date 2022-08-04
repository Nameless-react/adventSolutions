import { it, expect } from 'vitest';
import canCarry from '../advent21';

it("Deliver the gifts without exceed the max capacity", () => {
    expect(canCarry(3, [[2, 1, 5],[3, 5, 7]])).toBe(true)
    expect(canCarry(4, [[2, 5, 8], [3, 6, 10]])).toBe(false)
    expect(canCarry(4, [[2, 3, 8],[2, 5, 7]])).toBe(true)
    expect(canCarry(4, [[2, 3, 8],[2, 5, 7], [3, 6, 10]])).toBe(false)
    expect(canCarry(1, [[2, 3, 8]])).toBe(false) 
    expect(canCarry(2, [[1, 2, 4], [2, 3, 8]])).toBe(false)
    expect(canCarry(2, [[1, 2, 4], [2, 3, 8], [1, 4, 9]])).toBe(false)
})