/*const person = {
    surname: "Stark",
    knows(what,name){
        console.log(`Ты  ${what} знаешь, ${name} ${this.surname}`)
    }
}

const john = {surname: 'Сноу'}

person.knows("все","Бран")

person.knows.call(john,"ты ничего не","Джон")
person.knows.apply(john,["ты ничего не","Джон"])
person.knows.call(john,...["ты ничего не","Джон"])
const bound = person.knows.bind(john,"ты ничего не","Джон")
bound()*/

// ====== ES5 классы могли создавать через функции, т.к. функция будет являться классом, то можем использовать this
// Объекты можем создавать как инстанс данного класса , через ключевое слово new

/*
function Person(name,age) {
this.name = name
    this.age = age
    console.log(this)
}
 const elena = new Person('Elena', 20)
*/

// explicite - явный binding, с каким контекстом нам надо вызывать функцию

/*
function logThis() {
    console.log(this)
}

const obj = {num: 42}

logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()
*/

//======== implicite - неявная передача контекста

/*
const animal = {
    leg: 4,
    logThis: function () {
        console.log(this)
    }
}

animal.logThis()*/
//
/*
function Cat(color) {
this.color = color
    console.log('This', this);
    (() => console.log('Arrow this', this))()
}
new Cat('red')*/
