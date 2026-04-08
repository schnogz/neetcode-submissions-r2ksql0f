class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxL = 0;
        if (!s.length) return maxL;
        let tempSet = new Set();
        let wL = 0;
        let wR = 0;

        while(wR < s.length) {
            if(tempSet.has(s[wR])) {
                tempSet.delete(s[wL]);
                wL++;
            } else {
                tempSet.add(s[wR]);
                wR++;
            }

            maxL = Math.max(maxL, tempSet.size);
        }

        return maxL;
    }
}
