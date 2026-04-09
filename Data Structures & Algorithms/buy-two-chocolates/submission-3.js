class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {
        // const sorted = prices.sort((a, b) => a - b)

        // if(sorted[0] + sorted[1] <= money) {
        //     return money - (sorted[0] + sorted[1])
        // }
        // return money

        let l1, l2

        for(let i = 0; i < prices.length; i++) {
            let price = prices[i]
            if (!l1 || price < l1) {
                if(l1) {
                    l2 = l1
                }
                l1 = price;
                continue;
            }
            if (!l2 || price < l2) {
                l2 = price;
            }
        }

        let lp = l1 + l2

        return lp > money ? money : money - lp
    }
}
