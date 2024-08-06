function secSmallest(arr, n){
    arr.sort((a, b)=> a-b)
    return arr[n]
}
console.log(secSmallest([12,3,5,467,23,9,80],3))
