const people = [
    {name: "Alex", age:31, budget: 100000},
    {name: "Sasha", age:7, budget: 5000},
    {name: "Polya", age:10, budget: 5000},
    {name: "Nadya", age:32, budget: 36000}
]

/*for (let i=0;i<people.length;i++){
    console.log(people[i])
}*/

/*for (let person of people){
    console.log(person)
}*/

/*
people.forEach(function (person,index,pArr) {
    console.log(person)
})*/
/*
people.forEach(person => console.log(person))
*/

/*const newPeople = people.map(person => person.name)*/

/*const newPeople = people.map(person => `${person.name} (${person.age})`)

console.log(newPeople)*/

/*const adults=[]
for (let i=0;i<people.length;i++){
    if (people[i].age >= 18 ) {
        adults.push(people[i])
    }
}*/

/*const adults = people.filter(person => person.age >18)*/
/*
const adults = people.filter(function(person){
    if (person.age>18){
        return true
    }
})
console.log(adults)*/

/*let amount = 0;
for (let i=0;i<people.length;i++){
    amount += people[i].budget
}*/
/*const amount = people.reduce(function (total,person) {
return total+person.budget
},0)*/

/*
const amount =people.reduce((total,person)=>total+person.budget,0)

console.log(amount)*/

//Find
/*
const igor = people.find(person => person.name === "Sasha")
console.log(igor)*/

//FindIndex
/*const igorIndex = people.findIndex(person => person.name === "Sasha")
console.log(igorIndex)*/

const newPeople = people
    .filter(person => person.budget > 10000)
    .map(person => {
        return{
            info: `${person.name} (${person.age})`,
            budget: person.budget

        }
    })

console.log(newPeople)
