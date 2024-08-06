let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let key =4
// function linearse(arr,key){
// for(let i=0; i<arr.length; i++){
//     if(arr[i]===key){
//    return `${arr[i]} is found at index ${i}`
//     }
// }
// return -1+" not found"
// }
// console.log(linearse(arr,key))
// console.log(linearse(arr,11))

//-----method #02
console.log("objj");
// function linearse(arr,key){
//     let i=0;
//     while(i<arr.length){
//         if(arr[i]===key){
//              return `${arr[i]} is found at index ${i}`
//             }
//              i++;
//     }
//      return -1+" not found"
// }
// console.log(linearse(arr,11))
// console.log(linearse(arr,10))


//-----method #03
// arr.forEach((itm)=>{
//     let key;
// if(arr[itm]==-key)
// })

//-----method #04
function linearse(arr,key){
   
    for( let i of arr){
      if(key===i){

           return (`${i} is found at index:`+arr.indexOf(i));
        // console.log("key is found at index of :",arr[i])
        // return true
      }
    }
    return -1+" not found"
}
// console.log(linearse(arr,-3))
// console.log(linearse(arr,3))

function lin(arr, key){
    for(let i in arr){
        if(i===key){
            console.log(arr[i])
            //   return `${arr[i]} is found at index ${i}`
        }
    }
      return -1+" not found"
}
console.log(lin(arr,5))
console.log(lin(arr,-5))
