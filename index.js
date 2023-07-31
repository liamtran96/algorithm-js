//this file for running code to test

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
function canPlaceFlowers(flowerbed, n) {
    let count = 0;
  
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const prevEmpty = i === 0 || flowerbed[i - 1] === 0;
      console.log("flowerbed[i - 1]",prevEmpty)
      
      const nextEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
      console.log("nextEmpty",nextEmpty)
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




      