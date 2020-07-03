function curry(func) {
    return function curried(...args){
        if (args.length >=func.length){
            return func.apply(this,args)
        } else {
            return function pass(...args2){
                curried.apply(this,args.concat(args2))
            }
        }
    }
}

function sum(a,b,c){
    return a+b+c
}


let curriedSum = curry(sum)

console.log(curriedSum(1,2,3))

////////////////

function discount(discount){
    return (price) => {
        return price*discount
    }
}

const tenPercentDiscount = discount(0.1)

console.log(tenPercentDiscount(500))


///////

function partial(fn, ...args){
    return (..._args) => {
        fn(...args,..._args)
    }
}