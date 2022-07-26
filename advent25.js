function canMouseEat(direction, game) {
    const [indexX, indexY] = game.flatMap((array, indexArray) => array.flatMap((move, index)=> move === "m" ? [index, indexArray] : []))
    
    const moves = {
        "up": (game) => {
            if (game.length === 1) return false;     
            const newMouse = game[indexY - 1].map((move, index) => index === indexX && move === "*" ? true : false)
            return newMouse.some(move => move)
        },
        "down": (game) => {
            if (game.length === 1) return false;     
            const newMouse = game[indexY + 1].map((move, index) => index === indexX && move === "*" ? true : false)
            return newMouse.some(move => move)
        },
        "right": (game) => {
            const newMouse = game[indexY].map((move, index) => index === indexX + 1 && move === "*" ? true : false)
            return newMouse.some(move => move)
        },
        "left": (game) => {
            const newMouse = game[indexY].map((move, index) => index === indexX - 1 && move === "*" ? true : false)
            return newMouse.some(move => move)
        },
    };
    
    return moves[direction](game)

}
  
  const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
  ]
  
console.log(canMouseEat('up', room)) // false
console.log(canMouseEat('down',  room)) // true
console.log(canMouseEat('right', room)) // false
console.log(canMouseEat('left',  room)) // false
  


const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
]
  
console.log(canMouseEat('up', room2)) // false
console.log(canMouseEat('down',  room2)) // false
console.log(canMouseEat('right', room2)) // true
console.log(canMouseEat('left',  room2))   // false



const room3 = [
    [" ", " ", " ", " ", "*"],
    [" ", " ", " ", " ", "m"],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "]
]

console.log(canMouseEat("up", room3)) // true
console.log(canMouseEat("down", room3)) // false
console.log(canMouseEat("right", room3)) // false
console.log(canMouseEat("left", room3)) // false

const room4 = [
    ["*", "m", " ", " ", " "],
]

console.log(canMouseEat("up", room4)) // false
console.log(canMouseEat("down", room4)) // false
console.log(canMouseEat("right", room4)) // false
console.log(canMouseEat("left", room4)) // true