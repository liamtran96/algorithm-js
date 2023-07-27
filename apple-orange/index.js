// https://www.hackerrank.com/challenges/apple-and-orange/problem
/**
 * 1. I have to map the apples[] and oranges[] which is distance of each apple and orange
 * 2. I have to calculate the distance of each apple and orange fell from each other
 * => distanceOfEachApple = a (apple tree) + apple[i]
 * if distanceOfEachApple between: s(start point) and t(endpoint) which is Sam's house 
 * and the apple is valid on the other hand is not valid
 * similarly for the case of an orange.
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let countApple = 0;
    let countOrange = 0;
    apples.map((apple,index) => {
        const distanceOfEachApple = a + apples[index];
    console.log("distanceOfEachApple",distanceOfEachApple);
        if(distanceOfEachApple >= s && distanceOfEachApple <= t){
            countApple++
        }
    })
    oranges.map((orange,index) => {
        const distanceOfEachOrange = a + oranges[index];
        console.log("distanceOfEachOrange",distanceOfEachOrange);
        if(distanceOfEachOrange >= s && distanceOfEachOrange <= t){
            countOrange++
        }
    })
    console.log(countApple);
    console.log(countOrange);
}

countApplesAndOranges(7,11,5 ,15,[-2 ,2 ,1],[5 ,-6]);