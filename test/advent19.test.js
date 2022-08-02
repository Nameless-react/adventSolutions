import { it, expect } from 'vitest';
import learn from '../advent19';

it("Get the indices of the numbers of the second parameter that complete the first parameter", () => { 
    expect(learn(10, [2, 3, 8, 1, 4])).toEqual([0, 2])
    
    expect(learn(15, [2, 10, 4, 1])).toEqual([1, 2]) 
    expect(learn(25, [10, 15, 20, 5])).toEqual([0, 1])
    expect(learn(8, [8, 2, 1])).toEqual([1, 2]) 
    
    expect(learn(8, [8, 2, 1, 4, 3])).toEqual([3, 4]) 
    expect(learn(4, [10, 14, 20])).toEqual(null) 
    expect(learn(5, [5, 5, 5])).toEqual(null) 
})