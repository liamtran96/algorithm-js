// Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. 
//For instance, given the number 12 , its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99 .

// She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

// Given a range of numbered days [i...j],  and a number k, determine the number of days in the range that are beautiful. 
//Beautiful numbers are defined as numbers where |i-reverse(i)| is evenly divisible by k. 
//If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.

//https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?isFullScreen=true

// Function Description

// Complete the beautifulDays function in the editor below.

// beautifulDays has the following parameter(s):

// int i: the starting day number
// int j: the ending day number
// int k: the divisor

// Explanation

// Lily may go to the movies on days 20, 21, 22, and 23. We perform the following calculations to determine which days are beautiful:

// Day  20 is beautiful because the following evaluates to a whole number: (|20-02|)/6 = 3
// Day  21 is not beautiful because the following doesn't evaluate to a whole number: (|21-12|)/6 = 1.5
// Day  22 is beautiful because the following evaluates to a whole number: (|22-22|)/6 = 0
// Day  23 is not beautiful because the following doesn't evaluate to a whole number: (|23-32|)/6 = 1.5
// Only two days, 20 and 22 , in this interval are beautiful. Thus, we print 2 as our answer .

function beautifulDays(i, j, k) {
    // Write your code here
    let result = 0;

    for(let n = i; n<=j;n++){
        let reverse = parseInt(n.toString().split("").reverse().join(""))
        let diffirence = n - reverse;
        if(diffirence % k === 0) result++;
    }
    console.log(result)
    return result;
}
beautifulDays(20,23,6)
