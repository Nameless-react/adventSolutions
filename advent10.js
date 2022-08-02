export default function getCoins(change) {
    const coins = [50, 20, 10, 5, 2, 1];
    const map = new Map([...coins.map((coin) => [coin, 0])]);

    coins.forEach((coin, index) => {
        coins.forEach((coin2, index2) => {
            if(change <= 0) return
            if(coins[index] > change) return
    
            change -= coins[index];
            map.set(coins[index], map.get(coins[index]) + 1);
        })
    })
    return [...map.values()].reverse();
}

