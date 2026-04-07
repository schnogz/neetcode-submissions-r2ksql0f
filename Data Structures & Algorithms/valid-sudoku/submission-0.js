class Solution {
    isValidSudoku(board) {
        const rows = Array.from({length: 9}, () => new Set());
        const cols = Array.from({length: 9}, () => new Set());
        const boxes = {};

        for(let row = 0; row < board.length; row++) {
            for(let col = 0; col < board.length; col++) {
                let spotVal = board[row][col];

                if (spotVal === ".") continue;

                // validate rows
                if(rows[row].has(spotVal)) {
                    return false;
                } else {
                    rows[row].add(spotVal);
                }

                // validate columns
                if(cols[col].has(spotVal)) {
                    return false;
                } else {
                    cols[col].add(spotVal);
                }

                // validate boxes
                let boxKey = "" + Math.floor(row / 3) + Math.floor(col / 3);

                // init set if not already done so
                if(!boxes[boxKey]) {
                    boxes[boxKey] = new Set().add(spotVal);
                } else if (boxes[boxKey].has(spotVal)) {
                    return false;
                } else {
                    boxes[boxKey].add(spotVal);
                }
            }
        }

        // valid
        return true;
    }
}
