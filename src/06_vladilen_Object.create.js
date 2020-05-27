
const person = Object.create(
    {
        calculateAge(){
            console.log('Age', new Date().getFullYear()-this.bithYear)
        }
    },
    {
        name: {
            value:'Vladilen',
            enumerable:true,
            writable:true,
            configurable: true
        },
        bithYear: {
            value: 1993,
            enumerable:false,
            writable:false,
            configurable:false
        },
        age: {
            get() {
                return new Date().getFullYear() - this.bithYear
            },
            set(value) {
                document.body.style.background = 'red'
                return console.log('Set age',value )
            }
        }
    }
)

person.name = "Max"

for (let key in person){
    if (person.hasOwnProperty(key)){
        console.log("key", key,person[key])
    }

}

