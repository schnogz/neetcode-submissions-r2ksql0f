class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {
        const sorted = prices.sort((a, b) => a - b)

        if(sorted[0] + sorted[1] <= money) {
            return money - (sorted[0] + sorted[1])
        }
        return money
    }
}
