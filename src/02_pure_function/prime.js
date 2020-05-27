
const isPrime = (num) => {
    if (num < 2) {
        return false;
    }

    for (let i =2; i<= num / 2; i+=1){
        if (num % i === 0) {
            return false;
        }
    }
        return true;
}




const sayPrimeOrNot = (num) => {
    const text = isPrime(num)?'yes':'no'
    console.log(text)
}

sayPrimeOrNot(5)
sayPrimeOrNot(4)
sayPrimeOrNot(7)
