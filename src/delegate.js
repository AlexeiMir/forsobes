/*
const delegate = (eventName, el, selector, handler) => {
    el.addEventListener(eventName, (event) => {
        let items = [].slice.call(el.querySelectorAll(selector))
        let node = event.target
        if (items.length){
            while(el !== node && node !== null){
                const isTarget = items.some(item => item === node)
                if (isTarget) {
                    handler(node)
                    break;
                } else {
                    node = node.parentNode
                }
            }
        }
    })
}
delegate('click', document.querySelector('.wrapper'), '.child',
    (el) => el.style.backgroundColor = 'blue'
    )*/

/*function unique(arr) {
    return arr.filter((item,index,self) => self.indexOf(item) === index)
}*/

function unique(arr){
    let res = {}
    arr.forEach(item => {
        res[item] = ''
    })
    return Object.keys(res).map(item => Number(item))
}

console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3]))