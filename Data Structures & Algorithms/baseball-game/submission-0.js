class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let scoring = [];
        for(let i = 0; i < operations.length; i++) {
            switch(true) {
                case operations[i] === "+":
                    scoring.push(scoring[scoring.length - 1] + scoring[scoring.length - 2])
                    break;
                case operations[i] === "D":
                    scoring.push(scoring[scoring.length - 1] * 2)
                    break;
                case operations[i] === "C":
                    scoring.pop();
                    break;
                case !isNaN(Number(operations[i])):
                    scoring.push(parseInt(operations[i]))
                    break; 
                default:
                    throw Error("bad");
            }
        }

        return scoring.reduce((acc, v) => {
            return acc += v;
        }, 0);
    }
}
