// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
// She tabulates the number of times she breaks her season record for most points and least points in a game. 
// Points scored in the first game establish her record for the season, and she begins counting from there.

// Example
// scores = [12,24,10,24]
// Scores are in the same order as the games played. She tabulates her results as follows:

// Sample Input 0
// 9
// 10 5 20 20 4 5 2 25 1

// Sample Output 0

// 2 4



function breakingRecords(scores) {
    // Write your code here
    
    if(Array.isArray(scores)){
        let goodRecord = scores[0]
        let badRecord = scores[0]
        let breakGood = 0
        let breakBad = 0
        for (let i = 1; i <= scores.length; i++){
            if(scores[i] > goodRecord){
                goodRecord = scores[i]
                breakGood++
            }
            if(scores[i] < badRecord){
                badRecord=scores[i]
                breakBad++
            }
        }
    return [breakGood, breakBad]
        
    }
}