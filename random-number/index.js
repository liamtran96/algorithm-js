//random a a number from [0 , n]

const randomNumber = (number) => {
    if (number < 0 || typeof number !== "number") {
        console.log(-1)
        return -1;
    } else {
        const random = Math.random() * number;
        const result = Math.round(random)
        console.log(result)
        return result;
    }

}
// randomNumber(100)


//random a number [a, b] (a < b) (min => max)

const randomNumberFromAtoB = (a, b) => {
    if (a > b || (typeof a !== "number" && typeof b !== "number")) {
        console.log(-1)
        return -1;
    } else {
        const random = Math.random();
        console.log("random", random)
        // console.log("randomtimeb", randomtimeb)
        // included a and b
        const result = Math.floor(random * (b - a + 1) + a);
        console.log(result)
        return result;
    }

}
//another ways
// example: [10, 100]
// u need to random a number 0->90 (100-10=90) 
// and then plus the min number
const randomNumberInRange = (a, b) => {
    if (a > b || (typeof a !== "number" && typeof b !== "number")) {
        console.log(-1)
        return -1;
    } else {
        const random = Math.random();
        console.log("random", random)
        const result = Math.round(random * (b - a ) + a);
        console.log(result)
        return result;
    }

}

randomNumberInRange(2,5)
randomNumberInRange(2,5)
randomNumberInRange(2,5)
randomNumberInRange(2,5)
randomNumberInRange(2,5)
randomNumberInRange(2,5)
randomNumberInRange(2,5)

// randomNumberFromAtoB(2, 4)
// randomNumberFromAtoB(2, 4)
// randomNumberFromAtoB(2, 4)
// randomNumberFromAtoB(2, 4)
// randomNumberFromAtoB(2, 4)
// randomNumberFromAtoB(2, 4)
// randomNumberFromAtoB(2, 4)
// randomNumberFromAtoB(2, 4)
// randomNumberFromAtoB(2, 4)
// randomNumberFromAtoB(2, 4)
// randomNumberFromAtoB(2, 4)
// randomNumberFromAtoB(2, 4)
// randomNumberFromAtoB(2, 4)
// randomNumberFromAtoB(2, 4)
// randomNumberFromAtoB(2, 4)
