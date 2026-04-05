class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let mapp = {
            ")" : "(", 
            "}" : "{",
            "]" : "["
        }

        let stack = [];

        for(let i = 0; i < s.length; i++) {
            const currentChar = s[i]
            if (mapp[currentChar]) {
                // closing tag
                if (stack.length > 0 && stack[stack.length - 1] === mapp[currentChar]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(s[i])
            }
        }

        return stack.length === 0;
    }
}
