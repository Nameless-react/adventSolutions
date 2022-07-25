function maxProfit(prices) {
    let minPrice = [1000, prices.length];
    let maxPrice = [0, prices.length];

    prices.forEach((price, index) => {
        if (price < minPrice[0] && index != (prices.length - 1)) minPrice = [price, index];

        if (!maxPrice || price > maxPrice[0] && index > minPrice[1]) maxPrice = [price, index];
    })
    console.log(minPrice, maxPrice)
    if (maxPrice[0] - minPrice[0] <= 0) return -1
    return maxPrice[0] - minPrice[0];
}


console.log(maxProfit([39, 18, 29, 25, 34, 32, 5]))

console.log(maxProfit([10, 20, 30, 40, 50, 60, 70]))

console.log(maxProfit([18, 15, 12, 11, 9, 7]))

console.log(maxProfit([3, 3, 3, 3, 3]))
