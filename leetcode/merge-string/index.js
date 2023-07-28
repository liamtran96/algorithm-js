//https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75
/**
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, 
 * append the additional letters onto the end of the merged string.
 *  Return the merged string.  
 * Example 1:
    Input: word1 = "abc", word2 = "pqr"
    Output: "apbqcr"
    Explanation: The merged string will be merged as so:
    word1:  a   b   c
    word2:    p   q   r
    merged: a p b q c r

    Example 2:
    Input: word1 = "ab", word2 = "pqrs"
    Output: "apbqrs"
    Explanation: Notice that as word2 is longer, "rs" is appended to the end.
    word1:  a   b 
    word2:    p   q   r   s
    merged: a p b q   r   s

    Example 3:
    Input: word1 = "abcd", word2 = "pq"
    Output: "apbqcd"
    Explanation: Notice that as word1 is longer, "cd" is appended to the end.
    word1:  a   b   c   d
    word2:    p   q 
    merged: a p b q c   d
 */

    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
   function mergeAlternating(word1, word2) {
        let mergedString = ''; // Initialize an empty string to store the merged result.
        let minLength = Math.min(word1.length, word2.length); // Find the minimum length of both words.
      
        // Loop from 0 to the minimum length of both words.
        for (let i = 0; i < minLength; i++) {
          mergedString += word1[i] + word2[i]; // Concatenate the i-th character from both words in alternating order.
        }
      
        // After the loop, there might be some remaining characters in either word1 or word2.
        // We append them to the mergedString using the slice method.
        mergedString += word1.slice(minLength) + word2.slice(minLength);
        console.log(word2.slice(minLength))

        return mergedString; // Return the final merged string.
      }
      
      // Example usage:
      const word1 = "hello";
      const word2 = "worldssssaaaaa";
      const mergedString = mergeAlternating(word1, word2);
      console.log(mergedString); // Output: "hweolrllod"
      