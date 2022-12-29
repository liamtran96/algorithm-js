//https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true

function hurdleRace(k, height) {
    // Write your code here
    let i = 0;
    let max=0;
    for(;i<=height.length; i++){
        if(height[i] > max){
            max = height[i]
        }
    }
    return max<=k ? 0 :max- k;

}