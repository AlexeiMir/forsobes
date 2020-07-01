function calcValues(a,b) {
return [
    a+b,
    a-b,
    a*b,
    a/b
]
}
 /*const [sum,sub = "Вычитания нет",mult, ...other] = calcValues(42,10)

console.log(sum,mult,other,sub)
*/
 //Object
const person = {
    name: 'Max',
    age: 20,
    address: {
        country: 'Russia',
        city: 'Moscow'
    }
}

const {
    name:firstName = "Без имени",
    age,
    car = "Машины нет",
    address:{city:homeTown,country}
} = person
//console.log(firstName,age,car,homeTown,country)
/*const {name, ...info} = person
console.log(name, info)*/
//==================
function logPerson({name:firstName,age}) {
    console.log(firstName + ' ' +age)
}

logPerson(person)