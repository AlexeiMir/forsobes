/*Number.prototype.plus = function (value) {
    return this + value
}

Number.prototype.minus = function (value) {
    return this - value
}

const sumResult = (2).plus(3)
const minusResult = sumResult.minus(1)

console.log(minusResult)*/

/*
* 4. Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c',
* реализуйте ее так, что бы она вернула строку '1*b*1c'
* */

/*
const argum = ['*', '1', 'b', '1c']

function getStr() {
return [].slice.call(argum,1).join(argum[0])
}

console.log(getStr())*/

//5.

/*let tree1 = {
    valueNode: 1,
    next: [
        {
            valueNode: 3,
            next: null
        },
        {
            valueNode: 2,
            next: null
        }
    ]
}

let tree2 = {
    valueNode: 3,
    next: [{
        valueNode: 1,
        next: null
    },
        {
            valueNode: 3,
            next: null
        },
        {
            valueNode: 2,
            next: null
        },
        {
            valueNode: 2,
            next: [
                {
                    valueNode: 1,
                    next: null
                },
                {
                    valueNode: 5,
                    next: null
                }
            ]
        }]
};*/

/*
let sum = 0;

function getSum(obj) {
    sum += obj.valueNode
    if (obj.next !== null) {
        for (let i=0;i<obj.next.length;i++){
            getSum(obj.next[i])
        }
    }
return sum
}

console.log(getSum(tree2))*/

/*
function getSum(obj){
    let arr = [obj],
    sum = 0,
        current
    while (arr.length>0){
        current = arr.shift()
        sum+= current.valueNode
        if (current.next !== null){
            for(let i=0;i<current.next.length;i++){
                arr.push(current.next[i])
            }
            console.log(arr)
        }
    }
    return sum;
}

getSum(tree2)
//console.log([tree2].shift())*/
//12. Есть массив в котором лежат объекты с датами, отсортировать по датам

/*
let arr = [{date: '05.11.2016'}, {date: '21.13.2002'},{date: '10.01.2017'}];
arr.forEach(function (item) {
    let arrData = item.date.split('.'),
        date = new Date(Number(arrData[2]), Number(arrData[1]), Number(arrData[0]))
    item.time = date.getTime()
})

arr.sort(function (a, b) {
    if (a.time - b.time < 0) {
        return false
    } else {
        return true
    }
})

let res = arr.map(function (item) {
    return {date: item.date}
})

console.log(res)*/

// 13. Есть несколько слов, определить состоят ли они из одних и тех же букв('кот', 'ток', 'окт')

/*
let arr = ['kot', 'tok', 'okt'],
    arr1 = ['kot', 'tok', 'ott'];

function sameWords(arr) {
let word1,word2
    for (let i=0;i<arr.length-1;i++){
        word1 = 0;
        word2 = 0;
        if (arr[i].length != arr[i+1].length){
            return false
        } else {
            for (let j=0;j<arr[i].length;j++){
                word1 += arr[i][j].charCodeAt(0)
                word2 += arr[i+1][j].charCodeAt(0)
            }
            if (word1 !== word2) {
                return false
            }
        }
    }
    return true
}

console.log(sameWords(arr))
console.log(sameWords(arr1))*/

/*
for (var i=0; i<10;i++){
    (function (i){
        setTimeout(function () {
            console.log(i)
        },100)
    })(i)
}*/
/*

console.log(eval([4,2,4,3,7].join('+')))
*/

/*
function Book(name, author) {
    this.name = name;
    this.author = author;
    return this;
}

function Foo(Cclass,name,author) {
return Cclass.call({},name,author)
}

var book = Foo(Book, 'js', 'petr');
console.log(book.name);*/

/*
const palidrom = str => {
    str = str.toLowerCase()
    console.log(str == str.split('').reverse().join(''))
}

palidrom("Anna")*/

/*
function f(x) {
    return (y) => {
       return x+y
    }
}

console.log( f(2)(3))*/

/*
let m = [1, 7, 5, 13, 8]

const bubbleSort = arr => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
};

console.log(bubbleSort(m))*/

/*
let notation = '23+1-', notation1 = '7 2 3 * -', notation2 = '1 2 + 4 * 3 +';
function getComputation(notation) {
    let queue=[],temp,num1, num2
    for (let i=0;i<notation.length;i++){
        if( (/\d+/).test(Number(notation[i])) === true){
            queue.push(Number(notation[i]))
        } else {
            switch (notation[i]) {
                case "+":
                    temp = queue.pop() +queue.pop()
                    queue.push(temp)
                    break;

                case "*":
                    temp = queue.pop() * queue.pop()
                    queue.push(temp)
                    break;

                case "-":
                    num1 = queue.pop()
                    num2 = queue.pop()
                    if (num1>num2) {
                        temp = num1 - num2
                        queue.push(temp)
                    } else {
                        temp = num2 - num1
                        queue.push(temp)
                    }
                    break;

                case "/":
                    num1 = queue.pop()
                    num2 = queue.pop()
                    if (num1>num2) {
                        temp = num1 - num2
                        queue.push(temp)
                    } else {
                        temp = num2 - num1
                        queue.push(temp)
                    }
                    break;
            }
        }
    }
    return queue[0]
}

console.log(getComputation(notation))
console.log(getComputation(notation1))
console.log(getComputation(notation2))*/

/*
let arr = [
    {name: 'width', value: 10},
    {name: 'height', value: 20}
]

function getObj() {
let obj={}
arr.forEach((item) => {
    obj[item.name] = item.value
})
    return obj
}

console.log(getObj(arr))*/

/*var i = 10;
var array = [];

while (i--) {
    (function (i) {
        var i = i;
        array.push(function() {
            return i + i;
        });
    })(i);
}

console.log([
    array[0](),
    array[1](),
])*/

/*
$(#root).on('click',function (event) {
event.stopPropagation()
    console.log($(event.target).attr('id'))
})*/
/*
function validBraces(str) {
    let arrOpenSymbols = [],
        result = false,
        countOpenSymbols
    if (str.length > 0) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
                arrOpenSymbols.push(str[i])
            } else {
                countOpenSymbols = arrOpenSymbols.length
                if ((str[i] === '}' && arrOpenSymbols[(countOpenSymbols - 1)] === '{') ||
                    (str[i] === ']' && arrOpenSymbols[(countOpenSymbols - 1)] === '[') ||
                    (str[i] === ')' && arrOpenSymbols[(countOpenSymbols - 1)] === '(')) {
                    arrOpenSymbols.pop()
                }
            }
        }
        if (arrOpenSymbols.length === 0) {
            result = true
        } else {
            result = false
        }
    }
    return result
}

console.log('');
console.log(validBraces('()'));
console.log(validBraces('[]'));
console.log(validBraces('{}[]()'));
console.log(validBraces('([{}])'));
console.log(validBraces('())({}}{()][]['));*/


/*
var obj = {x: 'bar'};
function f() { console.log(this.x); }

f.call(obj)
const func = function f() { console.log(this.x); }.bind(obj)
func()*/

/*
function Book() {
this.name = 'foo'
}

Book.prototype = {
    getName: function () {
        return this.name
    }
}

let book = new Book()

Book.prototype.getUpperName = function () {
return this.getName().toUpperCase()
}

console.log(book.getUpperName())*/

/*
const arr = [7, 3, 4, 9, 5, 2, 17]

function oddSort(arr) {
const odd_sorted = arr.filter(item => item % 2 == 1).sort((a,b) =>a-b)
    console.log(odd_sorted)
    let i=0
    return arr.map((item) => {
        return (item %2 != 0 ) ? odd_sorted[i++] : item
    })
}

console.log(oddSort(arr))*/

/*
const delegate = (eventName,el,selector,handler) => {
    el.addEventListener(eventName, (event) => {
        let node = event.target
        const items = [].slice.call(el.querySelectorAll(selector))
        console.log(items)
        if (items.length){
            while (node !== el && node !== null) {
                const isTarget = items.some((item) => node === item)
                if (isTarget){
                    handler(node)
                    break;
                } else {
                    node = node.parentNode
                }
            }
        }
    })
}

delegate('click', document.querySelector('.wrapper'),'.child',
    (el) => el.style.backgroundColor = 'blue')*/

/*let arr = [1, 1, 2, 2, 4, 2, 3, 7, 3]*/

/*
function unique(arr) {
return [...new Set(arr)]
}

console.log(unique(arr))*/

/*
function unique(arr) {
return arr.filter((item,index,self) => (self.indexOf(item) === index))
}

console.log(unique(arr))*/

/*
function unique(arr) {
    let res = []
   arr.forEach((item) => {
       if (res.indexOf(item) === -1){
           res.push(item)
       }
})
    return res
}

console.log(unique(arr))*/

/*
function unique(arr){
    let res = {}
    arr.forEach((item) => {
        res[item] = '';
    })
    console.log(res)
    return Object.keys(res).map(item => Number(item))
}

console.log(unique(arr))*/

/*let arr = [1, [2, [3, [4,5]]]]*/

/*function flat(arr) {
    let res = []
    arr.forEach((item) => {
        if (Array.isArray(item)){
            res = res.concat(flat(item))
        } else {
            res.push(item)
        }
    })
return res
}*/
/*
function flat(arr) {
return arr.reduce((acc,val) => Array.isArray(val) ? acc.concat(flat(val)) : acc.concat(val),[])
}

console.log(flat(arr))*/

/*
let arr = [1, 2, null, 7, 8, null, 3]

function f(arr) {
return arr.filter((item) => item !== null).map((item) => item*2)
}

console.log(f(arr))*/

/*
let str = 'AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'
function rle(str){
    const result = [str[0]]

}*/

/*
let arr = [7, 3, 4, 9, 5, 2, 17]

function oddSort(arr) {
    arr.forEach((item,index) => {
        if (item%2 == 1) {
            let sortNumber = item
            for (let i=0;i<index;i++){
                if (arr[i]%2 == 1){
                    if (arr[i]>sortNumber){
                        [arr[i],sortNumber] = [sortNumber,arr[i]]
                    }
                }
            }
            arr[index] = sortNumber
        }
    })
    return arr
}

console.log(oddSort(arr))*/

/*
function isEqualSymbols(str1,str2){
if (str1.length !== str2.length){
    return false
}
if (str1.split('').sort().join('') === str2.split('').sort().join('') ){
    return true
}
    return false
}

console.log(isEqualSymbols('кот', 'ток'))
console.log(isEqualSymbols('кот', 'тик'))*/

/*let arr = [1,2,3]
console.log(Object.prototype.toString.call(arr))*/

/*function checkArray(value) {
    if (Object.prototype.toString.call(value) === '[object Array]'){
        console.log('Array')
    }
}
let arr = [1,2,3]
checkArray(arr)*/

function fullName() {
return `Hello, this is ${this.first} and ${this.last}`
}
let person = {first:'Bro', last:'Bar'}

console.log(fullName.call(person))