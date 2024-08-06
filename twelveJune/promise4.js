let myPromise = new Promise(function(resolve, reject){
    // let complete = true
    let complete = false
    console.log("data is comimg...")
    setTimeout(()=>{

        if(complete){
    
            resolve("I'm successFul")
        }else{
    
            reject("Failed")
        }
    },3000)
})
myPromise.then((result)=>{
    console.log(result)
    console.log("asyn Task is completed")
}).catch((error)=>{
console.log(error)
console.log("asyn Task is not completed")
}).finally(()=>{
    console.log("either resolve or reject code")
})

function myDisplay(some){
    console.log(some)
}
let myPromisee=new Promise(function(resolve, reject){
let x= 0;
if(x==0){

    resolve("okkey!")
}else{
    reject("error")
}
})
// myPromisee.then((value)=>{
// myDisplay(value)
// }).catch((error)=>{
// myDisplay(error)
// })

myPromisee.then( (value)=>{
myDisplay(value)
},(error)=>{
myDisplay(error)
}
)


// let a =Hello World   // olleH dlroW

function reverseStr(str){
    let splie = str.split("")
    console.log(str)
    // for(let i=0; i<str.length; i++){
    //     for(let j=0; j<str.length-i; i++){
    //         co
    //     }
    // }
}
console.log(reverseStr("shgaufta fatima"))