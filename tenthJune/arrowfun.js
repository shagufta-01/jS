// Arrow Functions in JavaScript

// const sqrt=(x)=>{
// return x*x
// }
// console.log(sqrt(4))
// const add=(a,b)=>a+b
// console.log(add(12,32))
// const radom =x=>(Math.floor(Math.random()*10)+1)
// console.log(radom())


// Arrow Function with "This" Keyword

// const person={
//     test(){
//         console.log(this)
//         setTimeout(()=>{
//             console.log(this)
//         },2000)
//     }
// }

let cal ={
  total:0,
    add(a){
        this.total +=a
        return this
    },
    sub(a){
        this.total -= a
        return this
    }
}
const result = cal.add(10)
console.log(result)