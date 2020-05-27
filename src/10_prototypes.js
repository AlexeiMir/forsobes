// __proto__ - ES6
// Object.getPrototypeOf() - ES5


function Cat(name,color)  {
this.name = name
    this.color = color
}

Cat.prototype.voice = function () {
    console.log(`Cat ${this.name} says may`)
}
// Путем расширения прототипа родительского класса для инстанса cat , мы получили доступ в этом объекте к методу voice

const cat = new Cat('Kot', 'white')
/*console.log(Cat.prototype)
console.log(cat)
console.log(cat.__proto__)
console.log(cat.constructor)
console.log(cat.__proto__ === Cat.prototype)*/
// поле prototype является указателем на объект, у которого есть конструктор и соответсвующие поля, которые будут добавлены для
// объектов , к-е будут созданы соответственно от этого класса
//cat.voice()

// ======

function Person() {
}
Person.prototype.legs = 2
Person.prototype.skin = "white"

const person  = new Person()
person.name = 'Vladilen'
/*console.log('skin' in person)
console.log(person.legs)
console.log(person.name)*/

/*console.log(person.hasOwnProperty('name') )
console.log(person.hasOwnProperty('skin'))*/

// Object.create() - позволяет создавать объекты используя существующий прототип

const proto = {year: 2019}
const myYear = Object.create(proto)

console.log(myYear.year)

proto.year = 2020
console.log(myYear.year)
/*
console.log(myYear.hasOwnProperty('year'))
console.log(myYear.__proto__ === proto)
*/
