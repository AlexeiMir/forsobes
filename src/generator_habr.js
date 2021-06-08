
function* getNumber() {
    console.log('start');

    const first = yield 1;
    console.log(first);

    const second = yield 2;
    console.log(second);

    const third = yield 3;
    console.log(third);
}

const iterator = getNumber()

console.log(iterator.next());
console.log(iterator.next('b'));
console.log(iterator.next('c'));
iterator.next('d')



function runMaybe(iterator){
    let result = iterator.next()

    while(!result.done){
        if (result.value === null || result.value === undefined) {
            return null
        }

        result = iterator.next(result.value)

    }
    return result.value
}

function* maybeAddNumbers() {
    const a = yield maybeGetNumberA()
    const b = yield maybeGetNumberB()
    
    return a+b
}
const maybeGetNumberA = () => null;
const maybeGetNumberB = () => {
    console.log('B');
    return 10;
}

const result = runMaybe(maybeAddNumbers())

console.log(result);

function sleep(n) {return new Promise(resolve=>setTimeout(resolve, n))}

async function* count(n=0) {while (true) {await sleep(100);yield n++}}

const iter = count(0);

async function getArr() {
    await Promise.all(
        Array(10).fill().map(async ()=>(await iter.next()).value)
    )
}

