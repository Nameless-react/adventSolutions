function getCoins(change) {
    const coins = [50, 20, 10, 5, 2, 1];
    const map = new Map([...coins.map((coin) => [coin, 0])]);
    let counter = 0;;
    // const timeCoins = {
    //     "50": 0,
    //     "20": 0,
    //     "10": 0,
    //     "5": 0,
    //     "2": 0,
    //     "1": 0
    // }

    while (change > 0) {
        for (let i = 0; i < coins.length; i++) {
            if (change <= 0) break;

            if (coins[counter] > change) break;
            change -= coins[counter];
            map.set(coins[counter], map.get(coins[counter]) + 1);
            // timeCoins[coins[counter]] = timeCoins[coins[counter]] + 1;
        }

        counter++;
    }

    // const entries = Object.entries(timeCoins);
    // entries.forEach(entry => map.set(entry[0], entry[1]));

    return [...map.values()].reverse();
}

console.log(getCoins(12));
console.log(getCoins(51)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)); // [0, 0, 0, 0, 0, 2]
