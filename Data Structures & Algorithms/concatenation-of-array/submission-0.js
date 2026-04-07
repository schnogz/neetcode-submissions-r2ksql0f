class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [];

        for(let i = 0; i < 2; i++) {
            for(let i2 of nums) {
                ans.push(i2)
            }
        }
        return ans
    }
}
