const numbers = [2, -5, 0, 7, -3, 0, 10, -8]

let positiveCount = 0
let negativeCount = 0
let zeroCount = 0

for (const number of numbers) {
    if (number > 0) {
        positiveCount++
    } else if (number < 0) {
        negativeCount++
    } else {
        zeroCount++
    }
}

console.log("Positive:", positiveCount)
console.log("Negative:", negativeCount)
console.log("Zero:", zeroCount)