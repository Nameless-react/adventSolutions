export default function missingReindeer(ids) {
    let counter = 0;
    [...ids].sort((a, b) => a - b).forEach(id => {
        if (id !== counter) return
        counter++;
    });    

    return counter;
}

