// let head = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3,
//     __proto__:head
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__:table
//   };
  
//   let pockets = {
//     money: 2000,
//     __proto__:bed
//   };

//   console.log(pockets.pen); //3
//   console.log(bed.glasses); //1

// let animal = {
//     eat(){
//         this.full = true
//     }
// }

// let rabbit = {
//     __proto__: animal
// }

// rabbit.eat();
// console.log(rabbit);

// let hamster = {
//     stomach: [],
//     eat(food){
//         this.stomach.push(food)
//     }
// }

// let speedy = {
//     stomach: [],
//     __proto__:hamster
// }

// let lazy = {
//     stomach: [],
//     __proto__:hamster
// }
// speedy.eat('apple')
// console.log(speedy.stomach);
// console.log(lazy.stomach);

// let animal = {
//     eats: true
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };

//   for (let prop in rabbit){
//       let isOwn = rabbit.hasOwnProperty(prop)

//       if (isOwn){
//           console.log(`Our: ${prop}`);
//       } else {
//           console.log(`Inherited: ${prop}`);
//       }
//   }
  
// let animal = {
//     walk(){
//         if (!this.isSleeping){
//             console.log('I walk');
//         }
//     },
//     sleep(){
//         this.isSleeping = true
//     }

// }
// let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
//   };

// rabbit.sleep()
// console.log(rabbit.isSleeping);
// console.log(animal.isSleeping);

let user = {
    name: "John",
    surname: "Smith",

    set fullName(value){
        [this.name, this.surname] = value.split(' ')

    },
    get fullName(){
        return `${this.name} ${this.surname}`
    }
}

let admin = {
    __proto__: user
}

console.log(admin.fullName);
admin.fullName = 'Alice Cooper'
console.log(admin.name);
console.log(admin.surname);
console.log(admin.__proto__);