


    const takeLast = (str,length) => {
        if (str.length < length) {
            return null
        }
        let result = []
        for (let i = str.length-1;result.length<length;i -= 1){
            result.push(str[i])
        }
        return result.join('')

    }


console.log(takeLast('power',4))