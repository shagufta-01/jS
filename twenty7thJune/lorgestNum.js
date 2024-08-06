


let arr =[1,345,12,8,345,54,46,0,6534,2]
// let arr1 =[1,6,4,8,0,2,9]
// let result = arr.sort((a,b)=> a>b ? 1:-1)
// console.log(result)



// Method 4: Using the forEach() method
let max =0;
arr.forEach((elmt)=>{
    if(elmt >max){
        max = elmt
    }
})
console.log(max)
// Method 3: Using a simple loop
let maxx =arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i] >maxx)
        maxx = arr[i]
}
console.log(maxx)
// Method 2: Using the reduce() method
let maax = arr.reduce((acc, cur)=>Math.max(acc, cur))
console.log(maax)