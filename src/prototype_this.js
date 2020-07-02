const Animal = function(options){
    this.name = options.name
    this.color = options.color
}

Animal.prototype.voice = function(){
    console.log('Base voice from', this.name)
}

const dog = new Animal({name:"Rax", color:'#fff'})

dog.voice()

const Cat = function(options){
    Animal.apply(this,arguments)
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

Animal.prototype.voice = function(){
    console.log('This sounds goes from', this.name)
}

Cat.prototype.voice = function(){
    Animal.prototype.voice.apply(this,arguments)
    console.log(this.name + ' says myay')
}


const cat = new Cat({name: 'Murzik', color: '#000', hasTail: true})





