class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length;
        let ans = new Array(n * 2);

        for(let i = 0; i < n; i++) {
            ans[i + n] = nums[i]; // set the second half
            ans[i] = nums[i];     // set the first half
        }
        return ans
    }
}
