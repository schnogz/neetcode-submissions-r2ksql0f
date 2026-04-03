class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        return details.reduce((count, passenger) => {
            console.log(1, passenger.slice(-4, -2))
            if (Number(passenger.slice(-4, -2)) > 60) {
                count += 1
            }
            return count;
        }, 0)
    }
}
