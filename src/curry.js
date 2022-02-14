// function curry(func) {
//     return function curried(...args){
//         if (args.length >=func.length){
//             return func.apply(this,args)
//         } else {
//             return function pass(...args2){
//                 curried.apply(this,args.concat(args2))
//             }
//         }
//     }
// }
//
// function sum(a,b,c){
//     return a+b+c
// }
//
//
// let curriedSum = curry(sum)
//
// console.log(curriedSum(1,2,3))
//
// ////////////////
//
// function discount(discount){
//     return (price) => {
//         return price*discount
//     }
// }
//
// const tenPercentDiscount = discount(0.1)
//
// console.log(tenPercentDiscount(500))
//
//
// ///////
//
// function partial(fn, ...args){
//     return (..._args) => {
//         fn(...args,..._args)
//     }
// }

//Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

// function f(a,b) {
//     if (b !== undefined){
//         return a+b
//     } else {
//         return function (b) {
//             return a+b
//         }
//     }
//
// }
//
// console.log(f(2,3))
// console.log(f(2)(3))
