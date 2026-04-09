class Solution {
    /**
     * @param {number[]} weight
     * @return {number}
     */
    maxNumberOfApples(weight) {
        let total = 0;
        const s = weight.sort((a,b) => a - b)

        for(let i = 0; i < s.length; i++) {
            if(total + s[i] <= 5000) {
                total += s[i];
                continue;
            }
            return i;
        }

        return weight.length;
    }
}
