export default function getMinJump(obstacles) {
    if (obstacles.length === 0) return 1;

   for (let i = 2; ;i++) {
        if (obstacles.every(obstacle => obstacle % i !== 0)) return i
    }
}