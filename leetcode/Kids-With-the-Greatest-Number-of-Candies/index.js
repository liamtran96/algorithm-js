https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

function kidsWithCandies (candies,extraCandies){
    const maxCandies = candies.reduce((a, b) => Math.max(a, b))
  
    // Create a boolean array to store the result
    const result = [];
  
    // Check if each kid can have the greatest number of candies after receiving extraCandies
    for (let i = 0; i < candies.length; i++) {
      console.log(candies[i] + extraCandies )
      result.push(candies[i] + extraCandies >= maxCandies);
    }
    console.log(result)
    return result;
  }
  kidsWithCandies([2,3,5,1,3],2)