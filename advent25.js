export default function canMouseEat(direction, game) {
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