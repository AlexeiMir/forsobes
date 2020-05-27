
const sum = (numbers) => {
    let  result = 0
    for (let num of numbers ) {
        result += num
    }
    return result;
}


const avarege = (...numbers) => {
    const count = numbers.length
    console.log(count)
    if (count === 0) {
        return null;
    }



    return sum(numbers) / count
}

console.log(avarege(25,36,15))