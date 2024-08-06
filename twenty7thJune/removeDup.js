// remove duplicates in js
// To remove duplicates in JavaScript, you can use the following methods:
function removeDup(arr){
    return [...new Set(arr)]
}
let arr =[1, 2, 2, 3, 4, 4, 5, 6]
console.log(removeDup(arr))


//2. Using filter and indexOf:
function removeDup(arr){
    let uniArr =[];
    for(let i=0; i<arr.length; i++){
        if(uniArr.indexOf(arr[i])===-1){
            uniArr.push(arr[i])
        }
    }return uniArr
}
console.log(removeDup(arr))

//3 Using the filter method with the Set:

function removeDup(arr){
    return arr.filter((value, index)=> arr.indexOf(value)===index)
}
console.log(removeDup(arr))