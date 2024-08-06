// function display(some){
//     console.log("display",some)
// }
// function calc(a,b){
//     let sum = a+b
//     display(sum)
// }
// calc(21,34)

// function mydis(some){
//     console.log(some,"display")
// }
// function myCal(a,b, fn){
//     let result = a+b
//     fn(result)
// }
// myCal(34,12,mydis)

// function mydi(data){
//     console.log(data)
// }
// function mycall(a,b){
//     mydi(a+b)
// }
// myCal(23,54)
const mynum = [1,2,4,-4,-32,12]
const postNum = removeNeg(mynum, (x)=>{
     return x>=0
})
function removeNeg(num,callBack){
    const myArr =[];
    for(const x of num){
        if(callBack(x)){
            myArr.push(x)
        }
    }
    return myArr
}
console.log(postNum)

// ------Waiting for a Timeout

setTimeout(()=>{
    console.log("waittt....!!")
},1000)


