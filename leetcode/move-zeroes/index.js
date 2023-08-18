// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

function moveZeroes(nums) {
    let nonZeroPointer = 0;

    for (let currentPointer = 0; currentPointer < nums.length; currentPointer++) {
        if (nums[currentPointer] !== 0) {
            // Swap non-zero element with the element at nonZeroPointer position
            let temp = nums[currentPointer];
            nums[currentPointer] = nums[nonZeroPointer];
            nums[nonZeroPointer] = temp;
            nonZeroPointer++;
        }
    }
}

// Example usage
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
