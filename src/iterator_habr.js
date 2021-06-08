let arr = [[1,'a'], [2,'b']]

let map = new Map(arr)

for (let element of map.entries()){
    console.log(element);
}

for (let element of map.keys()){
    console.log(element);
}

const ourArray = [1, 2, 3]

const iterator = ourArray[Symbol.iterator]()
const secondIterator = iterator[Symbol.iterator]()
console.log(iterator);
console.log(secondIterator);

for (let element of iterator){
    console.log(element);
}
console.log(iterator.next());

const counterIterator = {
    integer: -1,
    next(){
        this.integer++
        return {
            value: this.integer,
            done: false
        }
    },
    [Symbol.iterator](){
        return this
    }
}

for (let element of counterIterator) {
    if (element > 5) {
        break
    }
    console.log(element);
}

