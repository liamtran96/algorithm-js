// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24

function miniMaxSum(arr) {
    // Write your code here
    const initialValue = 0;
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    
    const a = arr.reduce((accumulator, currentValue) => accumulator +currentValue ,initialValue)- min
    const b = arr.reduce((accumulator, currentValue) => accumulator +currentValue ,initialValue)- max
    
    console.log(`${b} ${a}`);
}