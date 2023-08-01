/**
 * Example 1:

    Input: s = "hello"
    Output: "holle"
    Example 2:

    Input: s = "leetcode"
    Output: "leotcede
 */
/**
 * @param {string} s
 * @return {string}
 */

function isVowel(char) {
    return /[aeiouAEIOU]/.test(char);
  }
  
  function reverseVowels(input) {
    const chars = input.split('');
    console.log("chars",chars);
    let left = 0;
    let right = chars.length - 1;
  
    while (left < right) {
      // Move left pointer to the next vowel
      while (left < right && !isVowel(chars[left])) {
        left++;
      }
  
      // Move right pointer to the previous vowel
      while (left < right && !isVowel(chars[right])) {
        right--;
      }
  
      // Swap the vowels at the left and right pointers
      if (left < right) {
        const temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;
        left++;
        right--;
      }
    }
  
    return chars.join('');
  }

  reverseVowels("hello")



      