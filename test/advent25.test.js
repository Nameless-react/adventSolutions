import { it, expect } from 'vitest';
import canMouseEat from '../advent25';

it("Check if in the space is the '*' depending the movement (room)", () => {
    const room = [
        [' ', ' ', ' '],
        [' ', ' ', 'm'],
        [' ', ' ', '*']
      ]
      
    expect(canMouseEat('up', room)).toBe(false)
    expect(canMouseEat('down',  room)).toBe(true)
    expect(canMouseEat('right', room)).toBe(false)
    expect(canMouseEat('left',  room)).toBe(false)    
})

it("Check if in the space is the '*' depending the movement (room2)", () => {
    const room2 = [
        ['*', ' ', ' ', ' '],
        [' ', 'm', '*', ' '],
        [' ', ' ', ' ', ' '],
        [' ', ' ', ' ', '*']
    ]
      
    expect(canMouseEat('up', room2)).toBe(false) 
    expect(canMouseEat('down',  room2)).toBe(false)
    expect(canMouseEat('right', room2)).toBe(true) 
    expect(canMouseEat('left',  room2)).toBe(false)    
})

it("Check if in the space is the '*' depending the movement (room3)", () => {
    const room3 = [
        [" ", " ", " ", " ", "*"],
        [" ", " ", " ", " ", "m"],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "]
    ]
    
    expect(canMouseEat("up", room3)).toBe(true)
    expect(canMouseEat("down", room3)).toBe(false)
    expect(canMouseEat("right", room3)).toBe(false)
    expect(canMouseEat("left", room3)).toBe(false)
     
})

it("Check if in the space is the '*' depending the movement (room4)", () => {
    const room4 = [
        ["*", "m", " ", " ", " "],
    ]
    
    expect(canMouseEat("up", room4)).toBe(false) 
    expect(canMouseEat("down", room4)).toBe(false) 
    expect(canMouseEat("right", room4)).toBe(false)
    expect(canMouseEat("left", room4)).toBe(true)    
})
