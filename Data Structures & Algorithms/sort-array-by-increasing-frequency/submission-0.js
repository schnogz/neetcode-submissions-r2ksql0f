class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums) {
        let fMap = new Map()
        for(let n of nums) {
            let cv = fMap.get(n)
            cv !== undefined ? fMap.set(n, cv + 1) : fMap.set(n, 1)
        }

        return nums.sort((a, b) => {
            if(fMap.get(a) > fMap.get(b)) {
                return 1;
            }
            if(fMap.get(a) < fMap.get(b)) {
                return -1;
            }
            if (fMap.get(a) === fMap.get(b)) {
                return b - a;
            }
            return 0
        })
    }
}
