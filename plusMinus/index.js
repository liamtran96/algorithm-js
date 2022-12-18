// STDIN           Function
// -----           --------
// 6               arr[] size n = 6
// -4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]

// Sample Output

// 0.500000
// 0.333333
// 0.166667

// Explanation

// There are 3 positive numbers,  negative 2 numbers, and 1 zero in the array.
// The proportions of occurrence are positive:3/6 = 0.500000 , negative: 2/6=0.333333  and zeros: 1/6=0.166667.




function plusMinus(arr) {
    // Write your code here
    let nagative = 0;
    let positive = 0;
    let zero = 0;

    arr.map(element => {
        if (element > 0) nagative++;
        if (element < 0) positive++;
        if (element === 0) zero++;
    })

    console.log(
        nagative / arr.length.toFixed(5)
    )

    console.log(
        positive / arr.length.toFixed(5)
    )
    console.log(
        zero / arr.length.toFixed(5)
    )

}