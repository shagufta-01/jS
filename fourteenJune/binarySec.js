// function recFun(arr,key,start,end){
//     if(start >end) return false
//     let mid = Math.floor((start + end) / 2);
//     if(arr[mid]===key) return true
//     if(arr[mid]>key)
//         return recFun(arr,key,start,mid-1)
//     else 
//     return recFun(arr,key,mid+1,end)
// }
// let arr=[1,2,3,4,5,7,9]
// let key = 4;
// if(recFun(arr,key,0,arr.length-1)){
//     console.log("Element Found")
// }
// else{
//     console.log("element is not found")
// }
// key = 9
// if(recFun(arr,key,arr.length-1)){
//     console.log("Element found")
// }
// else{
//     console.log("Element is not found")
// }




// let recursiveFunction = function (arr, x, start, end) {
 
//     // Base Condition
//     if (start > end) return false;
 
//     // Find the middle index
//     let mid = Math.floor((start + end) / 2);
 
//     // Compare mid with given key x
//     if (arr[mid] === x) return true;
 
//     // If element at mid is greater than x,
//     // search in the left half of mid
//     if (arr[mid] > x)
//         return recursiveFunction(arr, x, start, mid - 1);
//     else
 
//         // If element at mid is smaller than x,
//         // search in the right half of mid
//         return recursiveFunction(arr, x, mid + 1, end);
// }
 
// // Driver code
// let arr = [1, 3, 5, 7, 8, 9];
// let x = 5;
 
// if (recursiveFunction(arr, x, 0, arr.length - 1)) {
//     console.log("Element found!");
// }
// else { console.log("Element not found!"); }
 
// x = 6;
 
// if (recursiveFunction(arr, x, 0, arr.length - 1)) {
//     console.log("Element found!");
// }
// else { console.log("Element not found!"); }



// function itrative(arr,key){
//     let start =0
//     let end = arr.length-1;
//     while(start<=end){
//         let mid =Math.floor((start+end)/2);
// if(arr[mid]===key)
//     return true

// else if(arr[mid]<key)
//     start = mid+1;

// els
//     end = mid-1

//     }
// return false
// }

// let arr=[1,2,4,57,79]
// let key=4;
// if(itrative(arr,key)){
//     console.log("element found")
// }
// else{
//     console.log("element is not found")
// }



function binarySe(arr,key){
    let st=0;
    let e =arr.length-1;
    let midd = Math.floor((st+e)/2)
    while(st<=e){
        if(arr[midd]===key) return midd
        if(arr[midd]<key){
            st = midd+1
        }
        else{
            e = midd-1
        }
        let midd = Math.floor((st+e)/2)
    }
    return -1
}

let arr=[2,4,6,8,12,18]
let key = 4
let evenIn = binarySe(arr,key)
console.log(evenIn)