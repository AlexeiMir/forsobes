// let obj = {};

// function A(){
//     return obj
// }
// function B(){
//     return obj
// }

// console.log(new A() === new B());

// function Calculator(){
    
//     this.number2
//     this.read = function() {
//         this.number1 = +prompt('Первое число')
//         this.number2 = +prompt('Второе число')
//     }
//     this.sum = function() {
//         return this.number1 + this.number2
//     }
//     this.nul = function() {
//         return this.number1 * this.number2
//     }

// }

// let calculator = new Calculator()

// calculator.read()
// console.log(calculator.sum());
// console.log(calculator.nul());

function Accumulator(startingValue){
    this.value = startingValue
}
