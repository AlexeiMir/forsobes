
const arr = [1,2,3,4,5]
function indexof(arr, arg) {
arr.forEach((a, index) => {
    if (a === arg) {
        return index
    } else {
        return -1
    }
})
}

console.log(indexof(arr, 5))
