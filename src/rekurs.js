// function sumTo(n) {
//     if (n===1) {
//         return 1
//     } else {
//         return n + sumTo(n-1)
//     }
// }
// console.log(sumTo(100))

// function sumToCircle(n){
//     let sum = 0
//     for (let i=1;i<=n;i++){
//         sum+=i
//     }
//     return sum
// }
// console.log(sumToCircle(100))

// function factorial(n){
//   return n ? n * factorial(n-1) : 1
// }

// console.log(factorial(5))

// function fib(n){
//     if (n <= 1){
//         return n
//     } else {
//         return (fib(n-1) + fib(n-2))
//     }
// }


// function fib2(n){
//     let a=1
//     let b=1
//     for (let i=3;i<=n;i++){
//         let c=a+b
//         a=b
//         b=c
//     }
//     return b
// }
// console.log(fib2(3)); // 2
// console.log(fib2(7)); // 13

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
 
//   function printList(list){
//      console.log(list.value)
//       if (list.next){
//         printList(list.next)
//       }
//   }

//   console.log(printList(list))

//   function printList2(list) {
//       let tmp = list
//       while(tmp) {
//           console.log(tmp.value)
//           tmp = tmp.next
//       }
//   }
//   console.log(printList2(list))

//   function printReverseList(list){
//     if (list.next){
//         printReverseList(list.next) 
//     }
//     console.log(list.value)

//   }
// console.log(printReverseList(list))

// function printReverseList2(list){
//     const arr = []
//     let tmp = list
//     while(tmp){
//         arr.push(tmp.value)
//         tmp = list.next
//     }
//     for (let i=arr.length-1;i>=0;i-- ){
//         console.log(arr[i])
//     }
// }

// console.log(printReverseList2(list))

function func(arr){
    console.log(arr.shift(), arr)
    if (arr.length !=0){
        func(arr)
    }
}

console.log(func([1,2,3]))