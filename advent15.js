export default function checkSledJump(heights) {
    const indexMax = heights.indexOf(Math.max(...heights));
    if (indexMax === heights.length - 1 || indexMax === 0) return false


    for (let i = 0; i < indexMax; i++) {
        if (heights[i] === heights[i + 1]) return false;
        if (heights[i] > heights[i + 1]) return false;
    }
    
    
    for (let i = indexMax; i < heights.length; i++) {
        if (heights[i] < heights[i + 1]) return false
    }
    return true
}
