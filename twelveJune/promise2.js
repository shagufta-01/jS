function prom(complete){
    console.log("Fatching data Please Wait...")
    return new Promise(function(resolve, reject){
       setTimeout( ()=>{
        if(complete){
            console.log("I'm Successful")
        }
        else{
            console.log("loading failed")
        }
       },3000)
   
    })
}
// let onFul = (result)=>{
// console.log(result)
// }
// let onReject =(error)=>{
// console.log(error)
// }
// prom(false).then(onFul).catch(onReject)
// or
prom(false).then((result)=>{
console.log(result)
}).catch((error)=>{
    console.log(error)
})