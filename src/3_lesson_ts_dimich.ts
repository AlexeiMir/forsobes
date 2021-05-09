type AddressType = {
    city?: string | null
    country: string | null
}

const sum : (a:number,b:number) => number = (a:number,b:number) => {
    return a + b
}

sum(21,3)

/*type InitialStateType = {
    sayHello: (message:string) => void
    name:string
    age: number
    isSamurai: boolean
    address: AddressType | null
}*/


let initialState = {
    //sayHello(message:string){alert("Yo")},
    name: null as string | null,
    age:null as number | null,
    isSamurai:null as boolean | null,
    address: [] as Array<AddressType>,
    counter:0
}

export type InitialStateType = typeof initialState

let state:InitialStateType = {
    address: [{
        country: "dwf",
        city: "defe"
    }],
    age: 20,
    counter: 10,
    isSamurai: true,
    name: "Alex"
}

const GET_TASKS = "APP/GetTasks"
type GetTasksActionType = {
    id:number,
    type: typeof GET_TASKS
}

const action:GetTasksActionType = {
    type:GET_TASKS,
    id:12
}