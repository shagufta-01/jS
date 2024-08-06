function secHighest(arr){
    let largest =arr[0]
    let secondLargest =-Infinity
    for(let i=1; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest =largest
            largest = arr[i]
        }else if(arr[i] < largest && arr[i] > secondLargest){
            secondLargest = arr[i]

        }
    }return secondLargest
}
console.log(secHighest([12,3,5,467,23,9,80]))

function secHighest(arr){
    arr.sort((a,b)=> b-a)
    return arr[1]

}
console.log(secHighest([12,3,5,467,23,9,80]))


// function secHighest(arr){
//     const uniArr =new Set(arr)
//     if(uniArr.size <2){
//         return "no sec"
//     }
//     let sorted  =[...uniArr].sort((a,b)=> b-a)
//     return sorted
// }
// console.log(secHighest([12,3,5,467,23,9,80]))