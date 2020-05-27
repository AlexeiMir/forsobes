/*setTimeout(() => {
    console.log('1')
    setTimeout( () => {
        console.log('2')
        setTimeout(() => {
            console.log('3')
        },1000)
    },2000)
},2000)*/

function setPrTimeout(ms) {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms)
    });
    return promise;
}

/*setPrTimeout(2000)
    .then(() => console.log('1'))
    .then(() => setPrTimeout(2000))
    .then(() => console.log('2'))
    .then(() => setPrTimeout(2000))
    .then(() => console.log('3'))*/

const crt = async () => {
    await setPrTimeout(2000)
    console.log('1')
    await setPrTimeout(2000)
    console.log('2')
    await setPrTimeout(2000)
    console.log('3')
}
crt()



