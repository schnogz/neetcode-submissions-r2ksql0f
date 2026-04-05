class Solution {
    isAlphaNumeric(char) {
        return /[a-zA-Z0-9]/.test(char);
    }
    
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while(l < r) {
            while(l < r && !this.isAlphaNumeric(s.charAt(l))) {
                l++;
            }
            while(r > l && !this.isAlphaNumeric(s.charAt(r))) {
                r--;
            }
            if (s.charAt(l).toLowerCase() !== s.charAt(r).toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
