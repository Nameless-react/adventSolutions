export default function canCarry(capacity, trips) {
    const totalGifts = {}
    trips.forEach(([gifts, collect, delivery], index) => {
        for (let stop = collect; stop < delivery; stop++) {
            totalGifts[stop] = (totalGifts[stop] ?? 0) + gifts;
        }
    })
    return Object.values(totalGifts).every(giftCount => giftCount <= capacity);
};
