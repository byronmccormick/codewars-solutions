// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

var isValid = function(s) {
    const stack = [];
    const brackets = { '(': ')', '[': ']', '{': '}' };

    for (const char of s) {
        if (char in brackets) {
            stack.push(char);
        } else {
            const lastOpenBracket = stack.pop();
            if (brackets[lastOpenBracket] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};