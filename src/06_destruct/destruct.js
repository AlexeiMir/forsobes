
const func = ([first,second=323]) => {
    console.log(first)
    console.log(second)
}

func([1,2])
func([1])

const funct = ({surname}) => {
    console.log(surname)
}

const obj = {name:'Joe', surname:'Doe'}

funct(obj)