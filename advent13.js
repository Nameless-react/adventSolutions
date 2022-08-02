export default function wrapGifts(gifts) {
    if (gifts.length === 0) return [];
    const newGifts = gifts.map(gift => `*${gift}*`);
    const wrapped = ["*".repeat(gifts[0].length + 2), ...newGifts, "*".repeat(gifts[0].length + 2)];
    return wrapped
};
