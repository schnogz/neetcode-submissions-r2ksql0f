// sliding window
// Time = O(n * m) m = number of times next() is called
// Space = O(m)
// class MovingAverage {
//     /**
//      * @param {number} size
//      */
//     constructor(size) {
//         this.windowSize = size;
//         this.window = []
//         this.l1 = 0;
//         this.l2 = 0;
//     }

//     /**
//      * @param {number} val
//      * @return {number}
//      */
//     next(val) {
//         this.window.push(val);
//         this.l2 += 1;

//         if (this.l2 >= this.windowSize) {
//             this.l1 = this.l2 - this.windowSize;
//         }

//         const windowTotal = this.window
//             .slice(this.l1,this.l2)
//             .reduce((acc, val) => acc + val, 0);

//             console.log(1, windowTotal)

//         return windowTotal / Math.min(queue.length, size);
//     }
// }

class MovingAverage {
    /**
     * @param {number} size
     */
    constructor(size) {
        this.windowSize = size;
        this.window = []
        this.runningSum = 0;
        this.count = 0;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    next(val) {
        this.count += 1;
        this.window.push(val);
        if (this.count > this.windowSize) {
            const deduct = this.window.shift()
            this.runningSum = (this.runningSum - deduct) + val;
        } else {
            this.runningSum += val;
        }
        return this.runningSum / Math.min(this.count, this.windowSize);

    }
}