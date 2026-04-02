class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // brute force
    // time - O(n^2)
    // space - 0(1)
    // twoSum(nums, target) {
    //     for(let i = 0; i < nums.length; i++) {
    //         for(let i2 = i + 1; i2 <= nums.length; i2++) {
    //             if (nums[i] + nums[i2] === target) {
    //                 return [i, i2]
    //             }
    //         }
    //     }
    // }

    // sorting and pointers
    twoSum(nums, target) {
        const mapped = nums
            .map((x, i) => [x, i])
            .sort((a, b) => a[0] - b[0]);

            console.log(mapped)

        let l = 0;
        let r = mapped.length - 1

        while(l < r) {
            let currentSum = mapped[l][0] + mapped[r][0];
            if (currentSum === target) {
                return [
                    Math.min(mapped[l][1], mapped[r][1]), 
                    Math.max(mapped[l][1], mapped[r][1]), 
                ];
            } else if (currentSum < target) {
                l++;
            } else {
                r--;
            }
        }

        return [];

    }
}
