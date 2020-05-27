
/*
const p = new Promise(function (resolve,reject) {
setTimeout(() => {
    console.log('Preparing data ...')
    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
    }
    resolve(backendData)
},2000)
})

p.then(data => {
   const p2 = new Promise(function (resolve,reject) {
setTimeout(() => {
    data.modified = true
    reject(data)
},2000)
   })
    p2.then(clientData => {
        clientData.fromPromise = true
        return clientData
    })
        .then(data => {
            console.log("Modified",data)
        })
        .catch( (error) => {
                console.log("Error: ",error)
            }
        )
})
*/

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(),ms)
    })
}
/*sleep(2000).then(()=> console.log('After 2 sec'))
sleep(3000).then(()=> console.log('After 3 sec'))*/

Promise.all([sleep(2000),sleep(5000)]).then(() => {
    console.log("All promises")
})


