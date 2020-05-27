
const users = [
    {name:'Tirion', birthday:'Nov 19,1988'},
    {name:'Sam', birthday:'Nov 22,1999'},
    {name:'Rob', birthday:'Jan 11,1975'},
    {name:'Sansa', birthday:'Mar 20,2001'},
    {name:'Tisha', birthday:'Feb 27,1992'},
    {name:'Chris', birthday:'Dec 25,1995'}
]

const takeoldest = (users,count=1) => {
    const sorted = users.sort((a,b) => {return (Date.parse(b.birthday) - Date.parse(a.birthday))})
    return sorted.slice(0,count)

}

console.log(takeoldest(users,2))


