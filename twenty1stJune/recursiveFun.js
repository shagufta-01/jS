// function recursive(n){
//     if(n===0){
//         return 1
//     }
//     else{
//         return n*recursive(n-1)
//     }
// }

// console.log(recursive(0))

// function binarySearch(arr,key){
//     let start=0;
//     let end = arr.length-1;
//     // let comparr =[]
//     let mid = (start+end)/2;
//     while(start<end){
//         if(arr[mid]===key){
//             return mid
//         }
//         else if(arr[mid]<key){
//             start = mid+1
//         }
//         else{
//             end = mid-1
//         }
//     }

// }
// console.log(binarySearch([1,2,3,4,5],3))
function binaryRec(arr,key,start,end){
    if(start>end){
        return -1
    }
    const mid =Math.floor((start+end)/2);
  
    if(arr[mid]===key){
        return mid
    }
    if(arr[mid]<key){
        return binaryRec(arr,key,mid+1, end)
    }
return binaryRec(arr,key, start,mid-1)

}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binaryRec(arr, 5,0,8))