function createCalcFunction(n){
    return function () {
        console.log(1000*n)
    }
}

const calc = createCalcFunction(42)
calc()

function createIncrementor(n) {
return function (num) {
return n+num
}
}

const addOne = createIncrementor(1)
console.log(addOne(25))