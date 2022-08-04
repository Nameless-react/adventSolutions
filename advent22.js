export default function countDecorations(bigTree) {
    let total = 0;
    const getValues = (value) => Object.values(value).forEach(v => v && typeof v === 'object' ? getValues(v) : total += v);
    getValues(bigTree);
    return total;
};