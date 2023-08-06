https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
function canPlaceFlowers(flowerbed, n) {
    let count = 0;
  
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      //check the prev splot is empty
      const prevEmpty =  flowerbed[i - 1] === 0;
      console.log("prevEmpty",prevEmpty)
      //check the next splot is empty
      const nextEmpty = flowerbed[i + 1] === 0;
      console.log("nextEmpty",nextEmpty)
      //check prevEmpty && nextEmpty == true it mean current position is available to plant the flower
      if (prevEmpty && nextEmpty) {
        flowerbed[i] = 1; // Plant a flower at the current position
        count++;
      }
    }
  }
  console.log("count",count)
  return count >= n;
}
// Example usage:
const flowerbed = [1, 0, 0, 1,];
const n = 1;
console.log(canPlaceFlowers(flowerbed, n)); // Output: true