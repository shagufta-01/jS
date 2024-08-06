function binarySearch(arr,key,cmp_fun){
    let s=0;
    let e =arr.length-1;
    while(s<=e){
        let k = (s+e)>>1;
        let cmp =cmp_fun()
    }
}
const arr = [1, 3, 5, 7, 8, 9];
const target = 5;

const result = binarySearch(arr,target);
console.log(result); // Output: 2