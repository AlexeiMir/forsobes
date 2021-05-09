function add(a:number,b:number):number {
return a+b
}

function toUpperCase(str:string):string {
return str.trim().toUpperCase()
}

interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition{
    default : string
}


function position() : MyPosition // Если функция не будет ничего получать, то будет возвращать интерфейс MyPosition - перегрузка
function position(a:number) : MyPositionWithDefault
function position(a:number,b:number) : MyPosition

function position(a?: number, b? : number) {

    if (!a && !b){
        return { x: undefined, y:undefined}
    }
    if (a && !b){
        return {x:a,y:undefined, default:a.toString()}
    }
    if (a && b){
        return {x:a,y:b}
    }

}

console.log('Empty',position())
console.log('One parametr',position(42))
console.log('Two parametr',position(42,15))

