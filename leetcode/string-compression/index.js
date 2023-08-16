// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

 

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:

// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".


var compress = function(chars) {
    let groupedChars = [];
    let currentGroup = [chars[0]];
    
    for (let i = 1; i < chars.length; i++) {
        if (chars[i] === chars[i - 1]) {
            currentGroup.push(chars[i]);
        } else {
            groupedChars.push(currentGroup);
            currentGroup = [chars[i]];
        }
    }
    
    groupedChars.push(currentGroup);
    let transformedArray = [];
    
    for (let subArray of groupedChars) {
        transformedArray.push(subArray[0]);
        if (subArray.length > 1) {
            // Convert the length to a string and split it into individual digits
            const lengthDigits = String(subArray.length).split('');
            transformedArray.push(...lengthDigits);
            console.log("lengthDigits",lengthDigits)
        }
    }
    console.log("transformedArray",transformedArray)
    
    // Modify the original chars array with the compressed data
    for (let i = 0; i < transformedArray.length; i++) {
        chars[i] = transformedArray[i];
    }
    
    
    // Return the new length of the compressed array
    return transformedArray.length;
  };
  
  let chars = ["a", "a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "c"];
  const newLength = compress(chars);
  // console.log(chars); // The modified chars array with compressed data
  // console.log(newLength); // The length of the modified chars array
  