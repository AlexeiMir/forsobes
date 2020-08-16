

Number.prototype.plus = function (value) {
    return this + value
}

Number.prototype.minus = function (value) {
    return this - value
}

const sumResult = (2).plus(3)
const minusResult = sumResult.minus(1)

console.log(minusResult)
