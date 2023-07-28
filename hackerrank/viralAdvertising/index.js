//https://www.hackerrank.com/challenges/strange-advertising/problem?isFullScreen=true

function viralAdvertising(n) {
    // Write your code here
    let initCumulative = 0
    let shared = 5;
    for(let i = 1; i<=n; i++){
        let liked = Math.floor(shared / 2)
        shared = liked * 3
        initCumulative += liked 
    }
    return initCumulative;

}