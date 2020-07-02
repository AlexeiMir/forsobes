class Animal {
    constructor(options) {
        this.name = options.name
        this.color = options.color
    }

    voice(){
        console.log('Base voice from', this.name)
    }

}

const dog = new Animal({name: 'Rex', color: 'white'})

class Cat extends Animal {
    constructor(options){
        super(options)

        this.hasTail = options.hasTail
        this.type = 'cat'
    }

    voice(){
        super.voice()
        console.log(this.name, " says myay")
    }
}

const cat = new Cat({name: 'Murzik', color: '#000', hasTail: true})


Object.prototype.print = function () {
    console.log("This object is", this)
}

cat.print()

Array.prototype.mapAndLog = function () {
    console.log("Array to map", this)
    return this.map.apply(this,arguments) // map является функцией и параметры туда передвем с помощью apply
}

console.log([1,2,3,4].mapAndLog(x => x**2))

String.prototype.toTag = function(tagName) {
    return `<${tagName}>${this}</${tagName}>`
}

console.log('eminem'.toTag('strong'))
console.log('eminem'.toTag('em'))

Number.prototype.toBigInt = function () {
return BigInt(this)
}

const number = 47
console.log(number.toBigInt())