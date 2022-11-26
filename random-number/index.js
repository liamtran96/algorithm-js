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


//random a number [a, b] (a < b)
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

randomNumberFromAtoB(2, 4)
randomNumberFromAtoB(2, 4)
randomNumberFromAtoB(2, 4)
randomNumberFromAtoB(2, 4)
randomNumberFromAtoB(2, 4)
randomNumberFromAtoB(2, 4)
randomNumberFromAtoB(2, 4)
randomNumberFromAtoB(2, 4)
randomNumberFromAtoB(2, 4)
randomNumberFromAtoB(2, 4)
randomNumberFromAtoB(2, 4)
randomNumberFromAtoB(2, 4)
randomNumberFromAtoB(2, 4)
randomNumberFromAtoB(2, 4)
randomNumberFromAtoB(2, 4)
