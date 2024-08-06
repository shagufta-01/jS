// let prom = new Promise()
// let promi=new Promise(function(){

// });
// let promis= new Promise(function(resolve, reject){

// })
// let promise = new Promise(function(resolve, reject){
// if(condtion){
// resolve("Here is a success")
// }else{
// reject("Here is a failure")
// }
// })
// let onFulfilment = (result)=>{
// console.log(result)
// }
// let onRejected =(error)=>{
//     console.log(error)
// }

// prom.then(onFulfilment)
// prom.catch(onRejected)


function prom(complete){

return new Promise(function(resolve,reject){
        if(complete){
    resolve("I'm successful")
        }else{
            reject("I'm rejected")
        }
    })
}
let onFulfilment = (result)=>{
    console.log(result)
}
let onRejected=(error)=>{
    console.log(error)
}
prom(true).then(onFulfilment)
prom(false).catch(onRejected)

// "I will call back later!"

// A callback is a function passed as an argument to another function
// 
// This technique allows a function to call another function

// A callback function can run after another function has finished
// function myFirst(){
//   console.log("Hello");
// }
// function mySecond(){
//     console.log("GoodBye");
// }
// mySecond()
// myFirst()

// method chain :----prom(true).then(onFulfil).catch(onRej)