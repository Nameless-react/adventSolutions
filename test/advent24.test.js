import { it, expect } from 'vitest';
import checkIsSameTree from '../advent24';

const tree = {
    value: 1,
    left: {
        value: 2, 
        left: null, 
        right: null 
    },
    right: { 
        value: 3, 
        left: null, 
        right: null 
    }
}

it("Check if the two trees are the same (small)", () => {
    
    const tree3 = {
        value: 1,
        right: { 
            value: 3, 
            left: null, 
            right: null 
        },
        left: { 
            value: 2, 
            left: null, 
            right: null 
        },
    }
      
    expect(checkIsSameTree(tree, tree3)).toBe(true)
})

it("Check if the two trees are the same (big)", () => {
    const tree2 = {
        value: 1,
        left: { 
            value: 3,
            left: {
                value: 2,
                left: null, 
                right: null 
            }, 
            right: null 
        },
        right: {
            value: 5, 
            left: null, 
            right: {
                value: 4, 
                left: null, 
                right: null 
            } 
        }
    }
      
    expect(checkIsSameTree(tree, tree2)).toBe(false)
    expect(checkIsSameTree(tree2, tree2)).toBe(true)
})