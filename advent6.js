export default function sumPairs(array, expectedValue) {
    let sum = null;
    array.forEach((value, index) => {
        if (sum) return sum
        array.forEach((value2, index2) => {
            if (value + value2 === expectedValue && index2 != index) sum = [value, value2]
        })
    })
    
    return sum
}