function sumPairs(array, expectedValue) {
    let sum = null;
    array.forEach((value, index) => {
        if (sum) return sum
        array.forEach((value2, index2) => {
            if (value + value2 === expectedValue && index2 != index) sum = [value, value2]
        })
    })
    
    return sum
}


console.log(sumPairs([1, 2, 3, 4, 5], 4)) // [1, 3]
console.log(sumPairs([3, 5, 7, 2], 10)) // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)) // null
console.log(sumPairs([2, 2, 3, 1], 4)) // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)) // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)) // [1, 5]