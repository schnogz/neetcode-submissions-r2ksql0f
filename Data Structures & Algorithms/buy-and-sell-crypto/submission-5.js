class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let i = 0;
        let i2 = 1;

        while(i2 < prices.length) {
            profit = Math.max(profit, prices[i2] - prices[i]);

            if(prices[i2] < prices[i]) {
                i = i2;
            }
            i2++;
        }


        return profit;
    }
}
