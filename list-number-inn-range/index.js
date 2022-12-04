// List numbers in the range [a, b]
// Write a function createArrayInRange(a, b) to create an array of numbers in the range [a, b] (including a and b)

// Where a, b are numbers that satisfy the following conditions: -100 < a < b < 100

// Returns an array containing the numbers between a and b.

// For example:

// createArrayInRange(1, 5) --> [1, 2, 3, 4, 5]

// createArrayInRange(-2, 1) --> [-2, -1, 0, 1]


// Please write this article in 2 ways:

// Use for...i createArrayInRangeV1(a, b)

// Using Array.from() createArrayInRangeV2(a, b)

// Happy coding!

function createArrayInRangeV1(a, b) {
    // your code here
    const arr = [a,b]
    let result = [];
    for(let i = arr[0]; i<=arr[arr.length -1]; i++){
        result.push(i);
        
    }
    return result
}


// using Array.from()
function createArrayInRangeV2(a, b) {
    // your code here
    let result = [];
    const arr = Array.from([a,b])
    for(let i = arr[0]; i<=arr[arr.length -1]; i++){
        result.push(i);
        
    }
    return result
}

