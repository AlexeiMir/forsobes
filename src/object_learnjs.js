/*
let schedule = {};

function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true
}

console.log(isEmpty(schedule))

schedule["8:30"] = "get up";

console.log(isEmpty(schedule))*/

// let salaries1 = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// let salaries2 = {
// }
//
// function sumProperties(salaries) {
//     let sum = 0
//     for (let key in salaries){
//         sum += salaries[key]
//     }
//     if (sum !== 0){
//         return sum
//     } else return 0
//
// }
//
// console.log(sumProperties(salaries1))
// console.log(sumProperties(salaries2))

class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
}

console.log(typeof User)
console.log(User === User.prototype.constructor)
console.log(User.prototype.sayHi)
console.log(Object.getOwnPropertyNames(User))