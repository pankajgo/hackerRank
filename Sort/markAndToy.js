function maximumToys(prices, k) {
    prices = prices.sort((a, b) => a-b)
    let totalSoFar=0
    let numberOfItems=0
    for(let i=0; i< prices.length; i++) {
        totalSoFar += prices[i]
        if (totalSoFar <= k) {
            numberOfItems++
        }
    }
    return numberOfItems
}