class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        for(let r = 0; r < words.length; r++) {
            let rowWord = words[r];
            let colWord = ""

            for(let c = 0; c < words.length; c++) {
                colWord = colWord.concat(words[c][r] ?? "")
            }

            if (rowWord !== colWord) {
                return false
            }
        }

        return true;
    }
}
