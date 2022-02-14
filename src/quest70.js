/*
const obj1 = {
    result : 0
}
const obj2 = {
    result : 0
}

function reduceAdd() {
    let result = 0
    for (let i=0, len = arguments.length; i< len; i++) {
        result += arguments[i]
    }
    this.result = result
    return this.result
}

console.log(reduceAdd.apply(obj1, [1,2,3,4,5]))
console.log(reduceAdd.call(obj2, 1,2,3,4,5))*/

/*
const person = {
    name: 'Marko Polo'
}
function greeting(greetingMessage) {
    return `${greetingMessage} ${this.name}`

}

console.log(greeting.call(person, 'Hello'))*/

/*
function map(arr, myCallback) {
    if (!Array.isArray(arr) || !arr.length || myCallback !== 'function') {
        return []
    } else {
        let result = []
            for (let i=0; i < arr.length; i++){
                result.push(myCallback(arr[i],i, arr))
        }
            return result
    }

}

function filter(arr, filterCallback) {
    if (!Array.isArray(arr) || !arr.length || filterCallback !== 'function') {
        return []
    } else {
        let result = []
        for (let i=0; i < arr.length; i++){
            if (filterCallback(arr[i],i, arr)) {
                result.push(arr[i])
            }
        }
        return result
    }
}

function reduce(arr, reduceCallback, initialValue) {
    if (!Array.isArray(arr) || !arr.length || reduceCallback !== 'function') {
        return []
    } else {
       let hasInitialValue = initialValue !== undefined
        let value = hasInitialValue ? initialValue: arr[0]
        for (let i= hasInitialValue ? 0 : arr[i]; i < arr.length; i++){
            value = reduceCallback(value, arr[i], i, arr)
        }
        return value
    }
}*/

/*
function one() {
    return arguments
}

console.log(one(2,4,5))*/

/*
const four = (...args) => args

console.log(four(1,2,3,4))*/

/*
const o1 = {}

const o2 = Object.create(o1)
console.log(o2.toString())

const o3 = Object.create(null)
console.log(o3.toString())*/

/*
function Person(firstName, lastName, age, address) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.address = address
}

Person.self = function () {
        return this
}

Person.prototype.toString = function () {
    return '[object Person]'

}

Person.prototype.getFullName = function () {
    return this.firstName + '' + this.lastName
}

// ES6
class Person1 {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.address = address
    }
    static() {
        return this
    }

    toString() {
        return '[object Person]'
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

}*/

/*
const set1 = new Set()
const set2 = new Set([1,2,3,4,4,5])
console.log(set2)

set2.add(9).add(7)
console.log(set2)
set2.delete(2)
console.log(set2)
console.log(set2.has(3))
console.log(set2.size)
console.log(set2.keys())

const nums = [1,2,3,4,5,6,6,7,8,8,5]
const uniqNums = [...new Set(nums)]
console.log(uniqNums)*/

/*
function add(a, b){
    return a + b
}

const nums = [5, 6]

const sum = add(...nums)
console.log(sum)*/

/*
function add(...rest) {
    return rest.reduce((total,current) => total + current)
}

console.log(add(1,3,5,7))

function getFirst([first,...rest] = [1,2,5,7]){
    return rest.reduce((total,current) => total + current)
}

console.log(getFirst())*/

/*
function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]'
}

console.log(isArray([1,2,3,4,5]))*/

/*
function even(num) {
    if (num & 1){
        return false
    } else {
        return true
    }
}

console.log(even(4))*/

/*const o = {
    'prop': 'bwahahah',
    'prop2': 'hweasa'
}
console.log('prop3' in o)
console.log(o.hasOwnProperty('prop'))

console.log(o['prop3'])*/

/*
const n = {
    name: 'Mark',
    greeting(){
        return `Hi, I am ${this.name}`
    }
}
function Person(name) {
    this.name = name
}

Person.prototype.greeting = function () {
    return `Hi, I am ${this.name}`
}

const mark = new Person('Mark')
console.log(mark.greeting())

const n1 = {
    greeting(){
        return `Hi, I am ${this.name}`
    }
}
const o = Object.create(n1)
o.name = 'Mark'
console.log(o.greeting())*/

/*
hoistedFunc()
notHoistedFunc()

function hoistedFunc() {
    console.log('Im hoisted')
}
var notHoistedFunc = function () {
    console.log('Im not hoisted')
}*/

/*
const o = {
    method(calback){
        calback()
    }
}
o.method(function () {
    console.log(this)
})*/

/*const details = {
    name: 'Marko Polo',
    greet(){
        return this.name
    }
}
console.log(details.greet())*/

/*
const obj1 = {
    result: 0
}

const obj2 = {
    result: 0
}

function reduceAdd() {
    let result = 0
    for (let i=0,len=arguments.length; i<len;i++){
        result += arguments[i]
    }
    this.result = result
    return this.result

}

console.log(reduceAdd.call(obj1, 1,2,3,4,5))
console.log(reduceAdd.apply(obj2, [1,2,3,4,5]))*/

/*
function isNull(value) {
return value === null
}

console.log(isNull(null))*/

/*
const arr = [1, 1, 2, 2, 4, 2, 3, 7, 3]

function unique(arr) {
    const res = {}
        arr.forEach((item) => {
          res[item] = ''
        })

    return Object.keys(res).map(item => Number(item))

}

console.log(unique(arr))*/

/*
const arr = [1, [2, [3, [4,5]]]]
function flat(arr) {
    let res = []
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            res = res.concat(flat(item))
        } else {
            res.push(item)
        }
    })
return res
}

console.log(flat(arr))*/

/*
const arr = [1, 2, null, 7, 8, null, 3]

function f(arr) {
    return arr.filter(item => item !== null).map(item => item *2)
}

console.log(f(arr))*/

/*
const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 4 },
                { value: 5 },
            ]
        },
        {
            value: 3,
            children: [
                { value: 6 },
                { value: 7 },
            ]
        }
    ]
};
function getTreeValues(tree) {
    let values = [tree.value]
   if (Array.isArray(tree.children)) {
       tree.children.forEach(item => values = values.concat(getTreeValues(item)))
   }
  return values
}

console.log(getTreeValues(tree))*/

/*function isEqualSymbols(str1,str2) {
    if (str1.length !== str2.length) {
        return false
    }
    if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
        return true
    }
    return false

}

console.log(isEqualSymbols('кот', 'ток'))*/

/*let i = 1
function func() {
    console.log(i)
    i++
    if (i<=10){
        func()
    }
}

console.log(func())*/

/*
const ourArray = [1, 2, 3];

const iterator = ourArray[Symbol.iterator]();

let result = iterator.next()

while (!result.done){
    const element = result.value
    console.log(element)
    result = iterator.next()
}

for (let element of ourArray){
    console.log(element)
}*/
// function randomstring(L) {
//     let s = '';
//     let randomchar = function() {
//         let n = Math.floor(Math.random() * 36);
//         if (n < 10) return n; //1-10
//         if (n < 36 && String.fromCharCode(n) != 'C'
//             && String.fromCharCode(n) != 'P'
//             && String.fromCharCode(n) != 'S'
//             && String.fromCharCode(n) != 'X')
//             return String.fromCharCode(n + 55); //A-Z
//     }
//     while (s.length < L) s += randomchar();
//     return s;
// }
// console.log(randomstring(5));

// function getStr() {
//     return [].slice.call(arguments,1).join(arguments[0])
// }
//
// console.log(getStr('*', '1', 'b', '1c'))

// let wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]];
// const leastBreaks = function (wall) {
//     const map = {}
//     let max = 0
//     wall.forEach(row => {
//         let sum = 0
//         for (let n=0;n<row.length-1;n++){
//             sum += row[n]
//             map[sum] = map[sum] ? map[sum] + 1 : 1
//             max = Math.max(map[sum],max)
//         }
//     })
//     return wall.length - max
// }
// console.log(leastBreaks(wall))

// function sum(a) {
//
//     let currentSum = a;
//
//     function f(b) {
//         currentSum += b;
//         return f;
//     }
//
//     f.toString = f.valueOf = function() {
//         return currentSum;
//     };
//
//     return f;
// }
//
// console.lof(sum(1)(2)(3))

// function oddSort(arr) {
//     arr.forEach((item,index) => {
//         if (item % 2 === 1){
//             let sortNumber = item
//             for (let i=0;i<index;i++){
//                 if (arr[i] % 2 === 1){
//                     if (arr[i] > sortNumber) {
//                         let tmp = sortNumber
//                         sortNumber = arr[i]
//                         arr[i] = tmp
//                     }
//                 }
//             }
//             arr[index] = sortNumber
//         }
//     })
//     return arr
// }

//
// console.log(oddSort([7, 3, 4, 9, 5, 2, 17]))

// const input1 = 'leetcode' //0
// const input2 = 'loveleetcode'// 2
// const input3 = 'aabb' // -1
//
// const firstUniqChar = function (str) {
//     const map = new Map()
//     for (let i=0;i<str.length;i++){
//         if (map.has(str[i])){
//             map.set(str[i],map.get(str[i])+1)
//         } else {
//             map.set(str[i],1)
//         }
//
//     }
//     for (let i=0;i<str.length;i++){
//         if (map.get(str[i]) === 1){
//             return i
//         }
//     }
//     return -1
// }
//
// console.log(firstUniqChar(input1))
// console.log(firstUniqChar(input2))
// console.log(firstUniqChar(input3))

// const input1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81,61];
// const input2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48,61];
// // Expected [5,4,57,79,7,89,88,45,34,92,38,85,6,0,77,44,61,61]
//
// let intersect = function(num1, num2){
//     const result = []
//     let map = num1.reduce((acc,i) => {
//         acc[i] = acc[i] ? acc[i] + 1 : 1
//         return acc
//     },{})
//     for (let i=0;i<num2.length;i++){
//         let current = num2[i]
//         let currentMapItem = map[current]
//        if (currentMapItem && currentMapItem>0) {
//            result.push(current)
//            map[current] = currentMapItem - 1
//        }
//     }
// return result
// }
//
// console.log(intersect(input1,input2))


// Поиск в отсортированном и сдвинутом массиве
/*
let nums = [4,5,6,7,0,1,2];
let search = function(nums,target){
   let left = 0
    let right = nums.length -1

    while (left <= right){
       let mid = Math.floor((left + right)/2)

        if (nums[mid] === target) {
            return mid
        }
        if (nums[left] <= nums[mid]){
            if (nums[left] <= target && target <= nums[mid]){
                right = mid -1
            } else {
                left = right + 1
            }
        }
        else {
            if (nums[mid] <= target && target <= nums[right]){
                left = mid +1
            } else {
                right = mid -1
            }
        }
    }
return -1
}
*/


/*
let inc = (function () {
let counter = 0
    return function () {
        return ++counter
    }
})()

console.log(inc())
console.log(inc())
console.log(inc())*/


/*let words = ['banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'orange', 'banana']



const sortWord = (arr) => {
    const temp = arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1
        return acc
    },{})
    console.log(temp)
    return Object.keys(temp).sort((a,b) => temp[b] - temp[a])
}
console.log(sortWord(words))*/

/*function multiplyByTwo(...restArgs) {
    return restArgs.map(el => el*2)
}

console.log(multiplyByTwo(1,2,3,4,5,6))*/

// function sum(a) {
//     return function (b) {
//         return a+b
//     }
// }
//
// console.log(sum(1)(2)(3)(4)())

/*
function sum(a,b) {
    return a+b
}
function mul(a,b) {
return a*b
}

function calculate(cb) {
    return function (a) {
        return function (b) {
            return cb(a,b)
        }
    }
}


console.log(calculate(sum)(2)(3)) // 5
console.log(calculate(mul)(2)(3)) // 6*/

// const obj = {
//     a:42,
//     say: function () {
//         setTimeout(() => console.log(this.a),1000)
//     }
// }
// console.log(obj.say())

// function unique(arr){
//     return arr.filter((item, index, self) => self.indexOf(item) === index)
// }
//
// console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3]))

// function flat(arr) {
//     let result = []
//     arr.forEach(item => {
//         if (Array.isArray(item)){
//             result = [...result,...flat(item)]
//         } else {
//             result.push(item)
//         }
//     })
//     return result
// }
//
// console.log(flat([1, [2, [3, [4,5]]]]))

// function isEqualSymbols(str1, str2){
//     if (str1.length !== str2.length){
//         return false
//     }
//     if (str1.split('').sort().join('') === str2.split('').sort().join('')){
//         return true
//     }
//     return false
// }
//
// console.log(isEqualSymbols('кот', 'ток'))

// function f() { console.log(this.x); }
// var obj = {x: 'bar'};
//
// //console.log(f.apply(obj))
// obj.funk = function f() { console.log(this.x); }
// console.log(obj.funk())

// var arr = [
//     {name: 'width', value: 10},
//     {name: 'height', value: 20}
// ]
//
// function getObj(arr) {
//     const res = {}
//     arr.forEach(item => {
//         res[item.name] = item.value
//     })
//     return res
// }
//
// console.log(getObj(arr))

// const getStr = (...args) => {
//     return args.slice(1).join(args[0])
// }

// function getStr(){
//     return [].slice.call(arguments,1).join(arguments[0])
// }
//
// console.log(getStr( '*', '1', 'b', '1c'))

// function palindrome(str){
//     str = str.toLowerCase().replace(/\s/g,'')
//     return str === str.split('').reverse().join('')
// }

// function palindrome(str){
//     let len = Math.floor(str.length/2)
//     for (let i=0;i<len;i++){
//         if (str[i] !== str[str.length - i -1]){
//             return false
//         }
//         return true
//     }
// }
//
// console.log(palindrome('racecar'))
// console.log(palindrome('А роза упала на лапу Азора'))

// const arr = [[1,2,[3,4]],[9],[10,12]]
//
// function flat(arr) {
// let res = []
//     arr.forEach(item => {
//         if (Array.isArray(item)){
//             res = [...res,...flat(item)]
//         } else {
//             res.push(item)
//         }
//     })
//     return res
// }
// let result = flat(arr).reduce((acc,value) => acc + value)
//
// console.log(result)

// function fn(n) {
//     setTimeout(() => {
//         console.log(n)
//     },0)
//  }
//
// for (var i = 0; i < 100; i++){
//     fn(i)
// }

/*const req = new XMLHttpRequest()

req.open('GET', 'http//api.com')
req.send()

req.onreadystatechange = function () {
if (req.readyState === 4){
    console.log(req.response)
}
}*/


// const req = fetch('url', {
//     method: 'GET'
// })
// req.then(res => res.json()).then(r => r)

// async function f() {
// const req = await fetch('url', {
//     method: 'GET'
// })
//     const data = await req.json()
// }

// function wait(t) {
//     return new Promise((resolve,reject) => {
//         setTimeout(resolve,t,true)
//     })
// }

// Promise.all([
//     Promise.resolve(10),
//     wait(1000),
//     wait(3000)
// ]).then(r => console.log(r))

// function promiseAll(promises) {
//     let res = []
//     const q = promises.length
//     return new Promise((resolve,reject) => {
//         for (let i=0;i<q;i++){
//             promises[i].then(response => {
//                 res.push(response)
//
//                 if (q === res.length){
//                     resolve(res)
//                 }
//             })
//         }
//     })
// }


//
// promiseAll([
//     Promise.resolve(10),
//     wait(1000),
//     wait(3000)
// ]).then(r => console.log(r))

// async function promiseEach(promises) {
//      for await (let p of promises){
//          const data = await p
//          console.log(data)
//
//     }
// }
//
// promiseEach([
//     Promise.resolve(10),
//     wait(1000),
//     wait(2000),
//     wait(3000),
//     wait(4000)
// ]).then(r => console.log(r))

// сумма элементов через замыкание

/*
console.log(sum(1)(2)(3)())  // 6
console.log(sum(10)(10)(10)(10)())  // 40

function sum(n) {
    let acc = n
    return function acamulate(i) {
        if (typeof i === 'number') {
            acc +=i
            return acamulate
        }
        return acc
    }

}*/


// function* createGen() {
//     yield 'start'
//     const a = yield;
//     console.log('### a', a)
//     const b = yield;
//     console.log('### b', b)
//     yield a+b
//     return 'end'
//
// }
//
// const gen = createGen()
//
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next(10))
// console.log(gen.next(20))
// console.log(gen.next())

// function* counter() {
// let i = 0
//     while(true){
//     yield i++
//     }
// }
// const g = counter()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

// Array.prototype.myMap = function (callback) {
//     const result = []
//     const thisArray = this
//     for (let i=0;i<thisArray.length;i++){
//         result.push(callback(thisArray[i],i,thisArray ))
//     }
//     return result
//
// }

/*
const obj1 = {
    a:1,
    b:2,
    c: {
        d:4
    }
}
const obj2 = JSON.parse(JSON.stringify(obj1))*/

// Отсортировать все нечетные по возрастанию
/*
function oddSort(arr) {
    let oddSorted = arr.filter(item => item % 2 === 1).sort((a,b) => a-b)
    let i = 0
    return arr.map(item => item % 2 !== 0 ? oddSorted[i++] : item)

}*/

// let inc = (
//     function () {
//         let counter = 0
//         return function () {
//             return ++counter
//
//         }
//     }
// )

/*const obj = {
    a:42,
    say: function () {
        setTimeout(() => {
            console.log(this.a)
        },1000)

    }
}
obj.say()*/

// Правильная последовательность скобок
// открывающиеся скобки кладем в стек
// Алгоритм стек

/*let s1 = '()';
let s2 = '()[]{}';
let s3 = '(]';
let s4 = '{[]}';
let s5 = '{[)}';
let s6 = '{[[{}{}]]()()';

const isValid = (s) => {
    let stack = []
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        if (isClosedBracket(current)){
            if (brackets[current] !== stack.pop()) {
                return false
            }
        } else {
            stack.push(current)
        }
    }
    return stack.length === 0
}

function isClosedBracket(ch) {
    return [")", "]", "}"].indexOf(ch) > -1;
}


console.log(isValid(s1))
console.log(isValid(s2))
console.log(isValid(s3))
console.log(isValid(s4))
console.log(isValid(s5))
console.log(isValid(s6))*/

// Поиск наибольшего контейнера с водой
// Алгоритм two pointers

// const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // 49
// const input2 = [1, 1]; // 1
// const input3 = [4, 3, 2, 1, 4]; // 16
// const input4 = [0, 0, 100]; // 2
//
//  function maxArea(height) {
//     let maxValue = 0;
//     let left = 0;
//     let right = height.length - 1;
//     while(left<right){
//         let currentValue = Math.min(height[left], height[right]) * (right - left);
//         maxValue = Math.max(maxValue, currentValue);
//         if (height[left] < height[right]){
//             left +=1
//         } else {
//             right -=1
//         }
//     }
//     return maxValue;
//  }
//
// console.log(maxArea(input1))
// console.log(maxArea(input2))
// console.log(maxArea(input3))
// console.log(maxArea(input4))

// Лучшее время для покупки акций #1

// let prices1 = [7, 1, 5, 3, 6, 4]; // 5
// let prices2 = [7, 6, 4, 3, 1]; // 0
//
// function maxProfit(prices) {
//     let maxProfit = 0
//     let minPrice = prices[0]
//
//     for (let i = 0; i < prices.length; i++) {
//         const current = prices[i];
//
//         if (current < minPrice) {
//             minPrice = current
//         }
//
//         if (current - minPrice > maxProfit) {
//             maxProfit = current - minPrice
//         }
//
//     }
//     return maxProfit
// }
//
// console.log(maxProfit(prices1))
// console.log(maxProfit(prices2))


//  сбор дождевой воды
// Алгоритм two pointers

// const input1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; // 6
// const input2 = [4, 2, 0, 3, 2, 5]; // 9
//
// function trap(height) {
//     let maxRight = height[height.length - 1];
//     let maxLeft = height[0]
//     let left = 1
//     let right = height.length - 2
//     let total = 0
//     while (left <= right) {
//         if (maxLeft <= maxRight) {
//             maxLeft = Math.max(maxLeft, height[left])
//             total += maxLeft - height[left]
//             left = left + 1;
//         } else {
//             maxRight = Math.max(maxRight, height[right])
//             total += maxRight - height[right]
//             right = right - 1
//         }
//     }
//
//     return total
// }
//
// console.log(trap(input1))
// console.log(trap(input2))

// Найти пересечение двух массивов

/*
const input1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81,61];
const input2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48,61];
// Expected [5,4,57,79,7,89,88,45,34,92,38,85,6,0,77,44,61,61]

let intersect = function (num1, num2) {
    let result = []
const map = num1.reduce((acc, i) => {
    acc[i] = acc[i] ? acc[i] + 1 : 1
    return acc
}, {})

    for (let i = 0; i < num2.length; i++) {
        const current = num2[i];
        let count = map[current]
        if (count && count>0){
            result.push(current)
            count -=1
        }

    }
    return result
}

console.log(intersect(input1, input2))*/

//  Пик горного массива
// Бинарный поиск

// let arr1 = [1,2,3,4,3,2,1];
// let arr3 = [10,9,8,7,6];
// let arr2 = [1,2,3,4,5,6,5,4,3,2];
//
// let peakIndexInMountainArray = function(arr) {
//     let start = 0
//     let end = arr.length-1
//     while (start < end) {
//         let middle = Math.floor((start + end) / 2)
//         if (arr[middle] < arr[middle+1]) {
//             start = middle + 1
//         } else {
//             end = middle
//         }
//     }
//     return start
// }
// console.log(peakIndexInMountainArray(arr1))
// console.log(peakIndexInMountainArray(arr2))
// console.log(peakIndexInMountainArray(arr3))

// ==================================================================

// Как случайным образом отсортировать массив
// Fisher-Yates shuffle

/*
let input = [1,2,3,4,5,6,7,8,9,10];

const shuffle = function (arr) {
    for (let i = arr.length-1; i > 0; i--) {
        let tmp = arr[i];
        let rnd = Math.floor(Math.random()*(i+1))
        arr[i] = arr[rnd]
        arr[rnd] = tmp
    }
    return arr
}

for (let i = 0; i < 10; i++) {
    console.log(shuffle(input).join(','))
}*/

// ==================================================================

// Как найти подстроку Палиндром
// Алгоритм 2 указателя

/*
const input1 = "babad"; // Output: 'bab' | "aba";
const input2 = "cbbd"; // Outupt: 'bb'
const input3 = "mississippississiississi"; // Outupt: 'ississi'
const input4 = "ac"; // Outupt: 'a' | 'c'

const longestPalindrome = (str) => {
    let start = 0
    let end = 0

    for (let i = 0; i <str.length; i++) {
        let len1 = expandFromCenter(str, i, i)
        let len2 = expandFromCenter(str, i, i+1)
        const len = Math.max(len1, len2)

        if (len> end - start) {
            start = Math.ceil(i - (len-1)/2)
            end = Math.floor(i+ (len/2))
        }
    }

    function expandFromCenter(s, L, R) {
        while(L >=0 && R < s.length && s[L] === s[R]) {
            L--
            R++
        }
        return R-L-1
    }
    return str.substring(start, end+1)
}

console.log(longestPalindrome(input1));
console.log(longestPalindrome(input2));
console.log(longestPalindrome(input3));
console.log(longestPalindrome(input4));*/

// ==================================================================

// Числовой палиндром
//  если инвертировать порядок всех цифр, получим ли мы то же самое число, что было изначально

// const input1 = 12321; // Output: true
// const input2 = -121; // Output: false
// const input3 = 10; // Output: false
//
// const isPalindromeNumber = function (x) {
//     if (x < 0) return false
//     if (x%10 === 0) return false
//     if (x < 10) return true
//
//     let rev = 0;
//     while(rev < x) {
//         console.log('rev:', rev, 'x:', x)
//         rev *=10;
//         rev += x%10;
//         x = Math.trunc(x/10);
//
//     }
//     return x === rev || x === Math.trunc(rev/10)
// }
// console.log(isPalindromeNumber(input1));
// console.log(isPalindromeNumber(input2));
// console.log(isPalindromeNumber(input3));

 // ==================================================================

// Заполнить матрицу нулями
// дана исходная матрица, заполненная числами. Необходимо для всех ячеек, которые содержат в себе 0,
// произвести обнуление полностью всей строки и колонки, в которой такая ячейка находится

/*const input1 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]; // [[1,0,1],[0,0,0],[1,0,1]]

const input2 = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
]; //[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

const setZeroes = function (matrix) {
let ROWS = matrix.length;
let COLS = matrix[0].length;
let isCol = false;

for (let i=0;i<ROWS;i++){
    if (matrix[i][0] === 0) {
        isCol = true
    }
    for (let j=1;j<COLS;j++){
        if (matrix[i][j] === 0){
            matrix[0][j] = 0
            matrix[i][0] = 0
        }
    }
}
    for (let i=1;i<ROWS;i++){
        for (let j=1;j<COLS;j++){
            if (matrix[0][j] === 0 || matrix[i][0] === 0) {
                matrix[i][j] = 0
            }
        }
    }
    if (matrix[0][0] === 0) {
        for (let j=0;j<COLS;j++){
            matrix[0][j] = 0
        }
    }
    if (isCol) {
        for (let i=0;i<ROWS;i++){
            matrix[i][0] = 0
        }
    }
    return matrix
}
console.log(setZeroes(input1));
console.log(setZeroes(input2));*/

// Сумма элементов массива

// const array = [1,2,3,4,5,6,6];
// // const sum = array.reduce((acc, next) => acc + next, 0);
// let sum=0;
//
// for (let i=0; i< array.length; i++) {
//     sum+= array[i];
// }
// console.log('sum', sum)

// Максимальное значение в массиве
// const array = [100,10,3,4,5,6,6];
// const max = Math.max(...array);
// let max = array[0];
// for (let i=1; i< array.length; i++){
//     max = max > array[i] ? max : array[i]
// }
// let max = array.reduce((acc, next) => Math.max(acc, next));
// array.sort((x1, x2) => x1 - x2);
// const max = array[array.length-1]
// const max = Math.max.apply(null, array)
// console.log('max', max)

// Сортировка
// array.sort((x1, x2) => {
//     if (x1<x2){
//         return -1
//     }
//     if (x1===x2){
//         return 0
//     }
//     return 1
// })
// console.log('array', array)

// const users = [
//     {
//         name: 'John',
//         age: 20
//     },
//     {
//         name: 'alex Moreno',
//         age: 30
//     }
//     ,
//     {
//         name: 'Alex M',
//         age: 25
//     }
// ]
// users.sort((u1, u2) => u1.age - u2.age);
// users.sort((u1, u2) => {
//     if (u1.name<u2.name){
//         return -1
//     }
//     if (u1.name===u2.name){
//         return 0
//     }
//     return 1
// })
// users.sort((u1, u2) => {
//     return u1.name.localeCompare(u2.name);
// })
// console.log('users', users)

// Развернуть массив

// const array = [100,10,3,4,5,6,6];

// const reversed = array.map((e, index, arr) => arr[arr.length - 1- index])
// for (let i = array.length-1; i> 0; i--){
//     reversed.push(array[i]);
// }
// console.log('reversed', reversed)

// console.log(
//     [...array].map([].pop, array)
// )

// Удадить false значения
// const array = [7, "correct", 0, false, 9, NaN, ""]

// const notFalsy = array.filter((el) => !!el);
// let notFalsy = [];
// for (let i=0; i< array.length; i++){
//     if (!!array[i]){
//         notFalsy.push(array[i])
//     }
// }
// notFalsy = array.filter(Boolean);
// console.log('notFalsy', notFalsy);

// Сравнение массивов
