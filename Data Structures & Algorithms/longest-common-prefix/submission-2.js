class Solution {
    // O(n * m)
    longestCommonPrefix(strs) {
        let j = 0;

        while(j < strs[0].length) {
            if(strs.every((s) => s.charAt(j) === strs[0].charAt(j))) {
                j++;
            } else {
                break;
            }
        }


        return strs[0].slice(0, j)
    }
}
