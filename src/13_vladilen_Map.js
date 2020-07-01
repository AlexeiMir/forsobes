const obj = {
    name: 'Vladilen',
    age: 26,
    job: 'Fullstack'
}

const entries = [
    ['name', 'Vladilen'],
    ['age', 26],
    ['job', 'Fullstack']
]

const map = new Map(entries)

map
    .set('newField', 42)
    .set(obj,'Value of object')
    .set(NaN,'Nan ??')

/*map.delete('job')
console.log(map.has('job'))
console.log(map.size)
map.clear()
console.log(map.size)*/

/*for (let [key,value] of map){
    console.log(key,value)
}*/

/*for (let val of map.values()){
    console.log(val)
}*/
/*for (let key of map.keys()){
    console.log(key)
}*/
/*map.forEach((key,value,m) => {
    console.log(key,value)
})*/

//=====================

//const array = [...map]
/*
const array = Array.from(map)

console.log(array)
*/

// ================================

const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'}
]

const visits = new Map(users)

visits
    .set(users[0],new Date())
    .set(users[1], new Date().getTime()+1000*60)
    .set(users[2],new Date().getTime()+5000*60)
function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[1]))
