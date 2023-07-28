//https://www.hackerrank.com/challenges/separate-the-numbers/problem

function separateNumbers(s) {
    const condition = Math.floor(s.length / 2)
    console.log(condition)
    for (let i = 1; i <= condition; i++) {
        const start = s.slice(0, i)
        console.log("start",start)
        let num = BigInt(start)
        console.log("num:",num)

        let built = ''
        while (built.length < s.length) built += num++
        console.log("built:",built)
        if (built === s) return console.log('YES', start)
    }
    console.log('NO')
}

separateNumbers("0102034")
separateNumbers("99910001001")
