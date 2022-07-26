function getMinJump(obstacles) {
    if (obstacles.length === 0) return 1;

   for (let i = 2; ;i++) {
        if (obstacles.every(obstacle => obstacle % i !== 0)) return i
    }

}

console.log(getMinJump([5, 3, 6, 7, 9])) // -> 4
console.log(getMinJump([2, 4, 6, 8, 10])) // -> 7
console.log(getMinJump([1, 2, 3, 5])) // -> 4
console.log(getMinJump([3, 7, 5])) // -> 2
console.log(getMinJump([9, 5, 1])) // -> 2