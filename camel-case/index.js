//https://www.hackerrank.com/challenges/camelcase/submissions/code/307733651

function camelcase(s) {
    // Write your code here
    let count = 1;
    for(let i = 0; i<= s.length; i ++){
       if(/[A-Z]/.test(s[i])) count ++; 
    }
    return count
}