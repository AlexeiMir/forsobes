/*const animals = {
    name: 'Animal',
    age: 5,
    hasTail: true
}*/

class Animal {
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }
    voice() {
        console.log("I am animal")
}
}

const animal = new Animal({
    name: 'Animal',
    age: 5,
    hasTail: true
})