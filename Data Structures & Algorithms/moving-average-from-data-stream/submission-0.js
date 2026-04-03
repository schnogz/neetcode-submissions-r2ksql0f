class MovingAverage {
    /**
     * @param {number} size
     */
    constructor(size) {
        this.windowSize = size;
        this.window = []
        this.l1 = 0;
        this.l2 = 0;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    next(val) {
        this.window.push(val);
        this.l2 += 1;

        if (this.l2 >= this.windowSize) {
            this.l1 = this.l2 - this.windowSize;
        }

        const windowTotal = this.window
            .slice(this.l1,this.l2)
            .reduce((acc, val) => acc + val, 0);

            console.log(1, windowTotal)

        return windowTotal / (this.window.length < this.windowSize ? this.window.length : this.windowSize);
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size);
 * var param_1 = obj.next(val);
 */
