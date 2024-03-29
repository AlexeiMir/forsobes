const requestURL = 'https://jsonplaceholder.typicode.com/users'

const sendRequest = (method,url,body=null) => {
    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch(url,{
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    }).then(response => {
        if (response.ok){
            return response.json()
        }
        return response.json().then(error => {
            const e = new Error('Что то пошло не так')
            e.data = error
            throw e
        })
    })
}

/*sendRequest("GET",requestURL).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})*/
const body = {
    name: 'Vladilen',
    age: 26
}

sendRequest("POST",requestURL,body).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})



