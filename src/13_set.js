const set = new Set([1,2,3,3,3,4,5,5,6])

set.add(10).add(20).add(30).add(20)


/*console.log(set.has(20))
console.log(set.size)
console.log(set.delete(10))
console.log(set)*/

/*for (let key of set) {
    console.log(key)
}*/
  function uniqValue(array) {
//return [...new Set(array)]
      return Array.from(new Set(array))
  }

console.log(uniqValue([1,2,2,3,3,4,4,5,5,5,7]))