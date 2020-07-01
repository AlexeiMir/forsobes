
/*
function pow(x,n) {
    let result =1
    for (let i=1;i<n;i++) {
        result *=x
    }
    console.log(result)
}

pow(2,4)*/

/*
function pow(x,n) {
if ( n == 1) {
    return x
} else {
    return x*pow(x,n-1)
}
}

console.log(pow(2,3))
*/

let company = { // тот же самый объект, сжатый для краткости
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}]
    }
};
function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((total,current) => total + current.salary,0)
    } else {
       let sum = 0;
        for (let subdep of  Object.values(department)) {
            sum += sumSalaries(subdep)
        }
        return sum
    }
}

console.log(sumSalaries(company))

