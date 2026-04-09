class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        let fives = 0;
        let tens = 0;

        for(let i = 0; i < bills.length; i++) {
            let payment = bills[i];

            // 5
            if(payment === 5) {
                fives += 1;
                continue;
            }

            // 10
            if(payment === 10) {
                if(!fives) {
                    return false;
                } else {
                    fives -= 1;
                    tens += 1;
                    continue;
                }
            }

            // 20
            if (payment === 20) {
                if(tens && fives) {
                    tens -= 1;
                    fives -= 1;
                    continue;
                }
                if(fives > 2) {
                    fives -= 3;
                    continue;
                }
                return false;
            }
        }

        return true;
    }
}
