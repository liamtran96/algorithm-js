//this file for running code to test

/**
 * Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 */
function reverseWords(s) {
    const chars = s.split('');
    // Helper function to reverse characters in a portion of the array
    function reverseRange(start, end) {
      while (start < end) {
        const temp = chars[start];
        chars[start] = chars[end];
        chars[end] = temp;
        start++;
        end--;
      }
      console.log("chars", chars)
    }
  
    reverseRange(0, chars.length - 1);
  
    let start = 0;
    for (let end = 0; end < chars.length; end++) {
      if (chars[end] === ' ') {
        reverseRange(start, end - 1);
        start = end + 1;
      }
      console.log("chars end",chars)
  
    }
  
    // Reverse the last word
    // reverseRange(start, chars.length - 1);
  // console.log(chars.join(''))
    return chars.join('');
  };
  
  reverseWords("the sky is blue")