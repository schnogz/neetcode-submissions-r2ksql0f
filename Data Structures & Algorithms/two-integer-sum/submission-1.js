class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // brute force
    // time - O(n^2)
    // space - 0(1)
    twoSum(nums, target) {
        for(let i = 0; i < nums.length; i++) {
            for(let i2 = i + 1; i2 <= nums.length; i2++) {
                if (nums[i] + nums[i2] === target) {
                    return [i, i2]
                }
            }
        }
    }

    // sorting and pointers
    // twoSum(nums, target) {
    //     const sorted = nums
    //         .map((x, i) => [x, i])
    //         .sort((a, b) => a[0] - b[0]);

    //     let iStart = 0;
    //     let iEnd = sorted.length - 1;

    //     while(iStart < iEnd) {
    //         const sum = sorted[iStart][0] + sorted[iEnd][0]
    //         if(sum === target) {
    //             return [
    //                 sorted[iStart][1], 
    //                 sorted[iEnd][1]
    //             ]
    //         } else if (sum > target) {
    //             iEnd -= 1;
    //         } else {
    //             iStart += 1;
    //         }
    //     }

    //     return [];
    // }
}
