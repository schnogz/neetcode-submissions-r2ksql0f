class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const vSet = new Set();

        for (const x of nums) {
            if (vSet.has(x)) return true;
            vSet.add(x)
        }
        return false
    }
}
