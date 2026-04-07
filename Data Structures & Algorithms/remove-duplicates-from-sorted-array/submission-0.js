class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let slowP = 0;
        let fastP = 1;
        
        while(fastP < nums.length) {
            if (nums[slowP] !== nums[fastP]) {
                slowP++;
                nums[slowP] = nums[fastP];
            }
            fastP++;
            
        }
        return slowP + 1;
    }
}
