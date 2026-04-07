class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let l = 0;
        let r = heights.length - 1;

        while(l < r) {
            let lw = heights[l];
            let rw = heights[r];
            let area = Math.min(lw, rw) * (r - l);

            if(area > maxArea) {
                maxArea = area;
            }
            if (lw >= rw) {
                r--;
            } else {
                l++;
            }
        }

        return maxArea
    }
}
