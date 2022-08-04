export default function checkSledJump(heights) {
    const indexMax = heights.indexOf(Math.max(...heights));
    if (indexMax === heights.length - 1 || indexMax === 0) return false


    const up = heights.every((height, index) => {
        if (index < indexMax) {
            if (heights[index] === heights[index + 1] || heights[index] > heights[index + 1]) return false;    
        }
        return true
    })

    const down = heights.every((height, index) => {
        if (indexMax <= index) {
            console.log(index, indexMax);
            if (height < heights[index + 1]) return false;
        }
        return true; 
    })

    return up && down;
};