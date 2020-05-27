/*
let a = 3;

let func = (function () {
let city = 'Minsk'
    let a = 3;
return function () {
    console.log(a)
}
})()

func()*/


// clouser https://www.youtube.com/watch?v=L2PSRa2JM9A&list=PLcvhF2Wqh7DM7lKuPOD2012PJSyKBqxv_&index=2
/*function createCounter() {
    let a = 0;
    return function () {
        a++;
        return a;

    }
}

let counter1 = createCounter();
let counter2 = createCounter();
let counter3 = createCounter();

console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter2())
console.log(counter2())
console.log(counter3())*/

// this - контестк вызова той функции в которой мы это  this написали


let a = {
    firstName: 'Dima',
    sayName: function () {
        console.log(this.firstName)
    }
}

a.sayName()

let b = {
    firstName: 'Sasha'
}

b.sayName = a.sayName
b.sayName()

let c = a.sayName.bind(a)

setTimeout(a.sayName.bind(a),1000)





