export default function maxProfit(prices) {
    let minPrice = [1000, prices.length];
    let maxPrice = [0, prices.length];

    prices.forEach((price, index) => {
        if (price < minPrice[0] && index != (prices.length - 1)) minPrice = [price, index];

        if (!maxPrice || price > maxPrice[0] && index > minPrice[1]) maxPrice = [price, index];
    });

    if (maxPrice[0] - minPrice[0] <= 0) return -1
    return maxPrice[0] - minPrice[0];
};