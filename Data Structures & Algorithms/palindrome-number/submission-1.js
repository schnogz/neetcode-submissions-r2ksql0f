class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        if (x < 0) return false;

        let st = String(x);
        let l = 0;
        let r = st.length - 1;

        while(l <= r) {
            if(st[l] !== st[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true
    }
}
