// const wrapper = document.querySelector('.wrapper')
// console.log(wrapper.children)
//
// function deepTree(divEl,currentLevel) {
// if (divEl.children === 0) return currentLevel
//     currentLevel += 1
//     let maxDeth = currentLevel
//     Array.from(divEl.children).forEach(element =>{
//         maxDeth = Math.max(deepTree(element,currentLevel),maxDeth)
//     })
// return maxDeth
// }
//
// console.log(deepTree(wrapper,0))

let str = 'efrg.fvfv.exe'

function fileExt(str) {
if (typeof str !== 'string') {
    throw new Error('Incorrect type of parametr')
}
    const part = str.split('.')
    return part.length === 1 ? null : part[part.length-1]
}

console.log(fileExt("exe"))
