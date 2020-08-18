/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === haystack) return 0
    if (needle === "") return 0

    // split on haystack - needle because you won't need to search past needle length
    for (i = 0; i <= haystack.length - needle.length; i++) { 
        if (needle === haystack.slice(i, i + needle.length)) return i
    }
    
    return -1
};