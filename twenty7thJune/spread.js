// Spread in array literals
// 1. A more powerful array literal
// Without spread syntax, the array literal syntax is no longer sufficient to create a new array using an existing array as one part of it. Instead, imperative code must be used using a combination of methods, including push(), splice(), concat(), etc. With spread syntax
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]
console.log(lyrics)

// 2. Copying an array
// You can use spread syntax to make a shallow copy of an array. Each array element retains its identity without getting copied.
const arr =[1,23,4]
const arr1 = [...arr,23,34]
arr.push(78)
arr1.push(67) //// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
console.log(arr1,"arr: ", arr)


// A better way to concatenate arrays
let arr3 =[1,2,3]
const arr4 =[45,65,76]
arr3 =arr4.concat(arr3,arr1,arr)
console.log(arr3)

const obj1={
    foo:"bar",
    x:23
}
const obj2={
    foo:"baz",
    x:12
}
const merge =(...)