class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // slow sort
        // let x1 = s.split("").sort().join()
        // let x2 = t.split("").sort().join()

        // return x1 === x2

        // hashMap
        if (s.length !== t.length) {
            return false
        }

        const x1 = new Map()
        const x2 = new Map()

        for(let i = 0; i < s.length; i++) {
            let z = s[i];
            let y = t[i];

            if (x1.has(z)) {
                x1.set(z, x1.get(z) + 1)
            } else {
                x1.set(z, 1)
            }

            if (x2.has(y)) {
                x2.set(y, x2.get(y) + 1)
            } else {
                x2.set(y, 1)
            }
            
        }

        for (const [key, val] of x1) {
            if(val !== x2.get(key)) {
                return false
            }
        }

        return true
    }
}
