class Solution {
    //  loops
    // O(n * m)
    // longestCommonPrefix(strs) {
    //     let prefix = strs[0];

    //     for(let i = 1; i < strs.length; i++) {
    //         const wordToCompare = strs[i];
    //         let j = 0;
    //         while(j < Math.min(prefix.length, strs[i].length)) {
    //             if (prefix[j] !== strs[i][j]) {
    //                 break;
    //             }
    //             j++;
    //         }
    //         prefix = prefix.slice(0, j)
    //     }

    //     return prefix
    // }

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
