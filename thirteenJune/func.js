//<------------ 1. Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223
// function reveerse(input){
//     let str = input.toString()
// console.log(str)
//     let spl = str.split("")
//     console.log(spl)
//     let rev = spl.reverse()
//     console.log(rev)
//     let jon  =rev.join("")
//     console.log(jon)

// }
// console.log(reveerse(32243))

// function rev (input){
//     return input.toString().split("").reverse().join("")
// }
// console.log(rev(21343))


// <----------2  Write a JavaScript function that checks whether a passed string is a palindrome or not?
// function palindr(str){
//     let revStr =str.split("").reverse().join("")
//     if(revStr===str){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(palindr("madam"))
// console.log(palindr("shgufta"))

// <------------ 3. Write a JavaScript function that generates all combinations of a string.
function combinator(str){
   let combi =[];
   for(let i=0; i<str.length; i++){
    for(let j=i+1; j<str.length+1; j++){
        combi.push(str.slice(i,j))
    }
   }
   return combi
}
console.log(combinator("dog"))

// <------------ 4.Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// function aplhabetic(str){
//     return str.split('').sort().join("")
// }
// console.log(aplhabetic("shagufta"))

// <------------ 4. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
// function capiFiL(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//   }
//   console.log(capiFiL("shagufta"))

// or
function upperCase(str){
    let arr =str.split(" ")
    let newArr =[];
    for(let i=0; i<arr.length; i++){
        newArr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))
    }
    return newArr.join(" ")
}
console.log(upperCase("function works by first splitting the input string"))

function 