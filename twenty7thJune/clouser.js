// function x(){
//     let a=21;
//     return function(){
//         let b=1;
//         return function(){
// let c=12;
// return function(){
//     let sum =a+b+c
//     return sum
// }
//         }
//     }
// }
// console.log(x()()())

// function random(){
//     let random = Math.random()*10+1
//     return random
// }

// console.log(random())

// remve dupli

// let arr =[3,8,25,5,8,3,6,2,2,100,10,1,4]
// let a =new Set(arr)
// console.log(...a)
// arr.filter((a,b,ar)=>{
//     if(ar.indexOf(a)==b){
//         return a
//     }
// })


// let arr =[3,8,25,5,8,3,6,2,2,100,10,1,4]
// let a =new Set(arr)
// console.log(...a)
// arr.filter((a,b)=>{
//     if(a===b){
//         return 1
//     }else{
//         return -1
//     }
// })


let arr =[1,7,2,3,4]
const obj ={...arr}
console.log(obj,typeof obj)
console.log(typeof arr)


const obj1 = { ...true, ..."test", ...10 }
console.log(obj1)
const max = Math.max.apply(null, arr)
const min = Math.min.apply(null, arr)
console.log(max)

const parts =["shoulder" , "kness"]
const lyrics=["head", ...parts,"and", "toes"]
console.log(lyrics)