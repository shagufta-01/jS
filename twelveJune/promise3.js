// 

// 1------------>

// const promiseone =  new Promise(function(resolve, reject){
// setTimeout(()=>{
//     console.log('Asyncc task is  completed')
//     resolve()
// },1000)
// })
// promiseone.then(()=>{
//     console.log("Promise Consumed")
// })


// 2--------------->
// new Promise(function(resolve, reject){
//     setTimeout(()=>{
// console.log("Async task 2 is completed")
// resolve()
//     },2000)
// }).then(()=>{
//     console.log("Promise2 is consumedd")
// })


//3------>
// let PromiseThree = new Promise(function(resolve, reject){
//     setTimeout(()=>{
// resolve({username:"chaii", code:"emil"})
//     },2000)
// }).then((user)=>{
// console.log(user)
// })
//4------>

// const promiseFour =new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let complete=true
//     if(complete){
//         resolve({username:"chaiiii", email:"hiteshChaudry@gmail.com"})
//     }
//     else{
//         reject(('Error: something went to wrong!'))
//     }
//     },1000)
// })
// promiseFour.then((user)=>{
// console.log(user)
// return user.username
// }).then((username)=>{
// console.log(username)
// }).catch((error)=>{
// console.log(error,"opps!!")
// }).finally(()=>{
//     console.log("The promise either resolve or Rejected...")
// })


// 5-------->
// const promiseFive =new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         let complete=false
//             if(complete){
              
//                 resolve({username:"chaiiii", email:"hiteshChaudry@gmail.com"})
//             }
//             else{
//                 reject(('Error: something went to wrong!'))
//             }
//     },1000)
// })
// async function cosumePromiseFive(){
//     try{

//         const response = await promiseFive
//         console.log(response)
//     }
//     catch(error){
// console.log(error)
//     }
// }
// cosumePromiseFive()
// 6------------------>
async function getUsers(){
    try{
        const response =await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
        // console.log(response)
    }
catch(error){
    console.log("E:",error)
}
 
}           
// getUsers();


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
}).then((data)=>{
console.log(data)
}).catch((error)=>{
    console.log( error)
})