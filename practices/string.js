console.log("obj")
// 1. Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

// function is_string(myVar){
//     if (typeof myVar === 'string' || myVar instanceof String)
//         return true
//         else{
// return false
//         }
//         // it's something else
//     }
// console.log(is_string([1, 2, 4, 0]))
// console.log(is_string('w3resource'))


// 2. Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

// function  addFive(n){
//     return n+3
// }
// function calculate(){
//     const sum =2+2
//     return sum
// }
// calculate()
// let preVal=[]
// function square(n){
// let result=0;
// if(preVal[n]!=null){
//     return preVal[n]
// }
// for(let i=0; i<n; i++){
// for(let j=1; j<=n; j++ ){
//     result = result+1
// }
// }
// preVal[n] = result
// return result
// }
// console.time()
// console.log(square(4))
// console.timeEnd()


// function memoize(func) {
//     const cache = {};
  
//     return function(...args) {
//       const key = JSON.stringify(args);
//       if (cache[key]) {
//         return cache[key];
//       } else {
//         const result = func(...args);
//         cache[key] = result;
//         return result;
//       }
//     };
//   }
  
//   function square(num) {
//     return num * num;
//   }
  
//   const memoizedSquare = memoize(square);
  
//   console.log(memoizedSquare(4)); // 16
//   console.time()
//   console.log(memoizedSquare(4)); 
// console.timeEnd()
// console.time()
// console.log(memoizedSquare(4)); 
// console.timeEnd()
// console.time()
// console.log(memoizedSquare(5));
// console.timeEnd()
//   console.log(memoizedSquare(4)); // 16 (from cache)
 // 25



 // program to solve quadratic equation
// let root1, root2;

// take input from the user
// let a = prompt("Enter the first number: ");
// let b = prompt("Enter the second number: ");
// let c = prompt("Enter the third number: ");

// calculate discriminant
// let discriminant = b * b - 4 * a * c;

// condition for real and different roots
// if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    // console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// condition for real and equal roots
// else if (discriminant == 0) {
    // root1 = root2 = -b / (2 * a);

//     // result
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// if roots are not real
// else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

//     // result
//     console.log(
//     `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
//   );
// }

// 10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"
function multiply(n,len){
    let arr=[]
    for(let i=1; i<len+1; i++){
        arr.push(i*n);
    }
    return arr
}
// console.log(multiply(7,5))
// console.log(multiply(12,10))

function findVowel(str){
    // let arr=[]
    let count=0
    if(str=='a' ||str=='e'|| str=='i'||str=='o'||str=='u'){

count++
    }}
  
console.log(findVowel("JavaScript function"))


// function findVowel(str){
//     let count=0
// let newarr=[]
//     let vowels=['a','e','i','o','u'];
//     for(let i of str){
//         if(vowels.includes(i))
// newarr.push(i)
//             count++
//     }
    
// return newarr
// }
// console.log(findVowel("shagufta"))

// function findVowels(str){
//        return `str.toLowerCase().match(/[aeiou]/g).length
//   
// }
// console.log(findVowels("shaguftaaa"))

// 10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"

// function swapcase(str){
//     return str.replace(/([a-z]+)|([A-Z]+)/g, function(Match,chr){
//         return chr ?Match.toUpperCase(): Match.toLowerCase()
//     })
// }
// console.log(swapcase("AaBbc"))

function prime(n){
    if(n===1) return 1

    for(let i=2; i<n; i++){
        if(n%i==0){
            return 0
        }
        return 1
    }
}
// console.log(prime(3))
// console.log(prime(23))
// console.log(prime(40))
// console.log(prime(1))

function fibbonaci(n){
    let fibArr=[0,1];
    for(let i=2; i<=n;i++ ){
        let x = fibArr[i-1]+fibArr[i-2];
        fibArr.push(x)
    }
    return fibArr
}
console.log(fibbonaci(10))


function fibSeries(n){
    let a=0;
    let b=1
    let result = [];
    for(let i=1; i<=n; i++){
let c = a+b
result.push(c);
a=b;
b=c

}
return result;
}
console.log(fibSeries(10))


// function swapcase(str){
//     return str.replace(/([a-z]+)([A-Z]+)/g,function (matchh, chr) {
//         return chr ? matchh.toUpperCase():matchh.toLowerCase()
//     }
// )
// }
// console.log(swapcase("StuDeNt"))
function uncamelize(str){
    return str.replace(/([a-z]+)([A-Z]+)/g,function(matchh,chr){
        return chr.replace("-")
    })
}
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));

// function repeatt(str,len){
//     return str.repeat(len)
// }
// console.log(repeatt("ha!",3))

// function insertString(str, insertStr, pos = 1) {
//     return str.slice(0, pos - 1) + insertStr + str.slice(pos - 1);
// }
// console.log(insertString("We are doing some exercises.","js"))
function insert(str,insertStr, pos){
    return str.slice(0,pos-1)+insertStr+str.slice(pos-1)
}
// console.log(insertString("We are doing some exercises.","js"))