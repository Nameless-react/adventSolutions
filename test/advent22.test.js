import { it, expect } from 'vitest';
import countDecorations from '../advent22';

it("Get the amount of decorations from a binary tree (small)", () => {
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
    
    expect(countDecorations(tree)).toBe(6)
})


it("Get the amount of decorations from a binary tree (big)", () => {
    const bigTree = {
        value: 1,
        left: {
          value: 5,
          left: {
            value: 7,
            left: {
              value: 3,
              left: null,
              right: null
            },
            right: null
          },
          right: null
        },
        right: {
          value: 6,
          left: {
            value: 5,
            left: null,
            right: null
          },
          right: {
            value: 1,
            left: null,
            right: null
          }
        }
      }
            
    expect(countDecorations(bigTree)).toBe(28)
})