class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        for(let i = 0; i < flowerbed.length; i++) {
            let prev = flowerbed[i - 1] ?? 0
            let next = flowerbed[i + 1] ?? 0
            if (prev === 0 && flowerbed[i] === 0 && next === 0) {
                flowerbed[i] = 1;
                n -= 1;
            }
        }

        return Boolean(n <= 0)
    }
}
