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
