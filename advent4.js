export default function createXmasTree(height) {
    const base = `${"_".repeat(height - 1)}#${"_".repeat(height - 1)}`
    let pieces = ""
    for (let i = 0; i < height; i++) {
        pieces += `\n${"_".repeat(i)}${"*".repeat(base.length - i * 2)}${"_".repeat(i)}`
    }
    
    const christmasTree = Array.from(pieces).reverse().join("")
    return christmasTree + base + "\n" + base 
}
