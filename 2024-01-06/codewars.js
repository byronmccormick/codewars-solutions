// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    let prefix=strs[0];
    for(let i = 0; i < strs.length;i++){
         let j = 0;
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        prefix = prefix.slice(0, j);

        if (prefix === "") {
            break;
        }
    }
    return prefix
};