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
