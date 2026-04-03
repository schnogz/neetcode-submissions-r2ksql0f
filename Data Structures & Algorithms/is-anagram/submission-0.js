class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let x1 = s.split("").sort().join()
        let x2 = t.split("").sort().join()

        return x1 === x2
    }
}
