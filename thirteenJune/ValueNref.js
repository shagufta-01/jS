// the value of the variable is copied to the function and changes made to the variable within the function do not affect the original variable. This is the default behavior in JavaScript for primitives (Boolean, null, undefined, String, and Number).
let a =10
let b =a
// console.log(a===b)
// console.log("before a=>",a)
// console.log("before b=>",b)
// b=8
// console.log(a===b)
// console.log("after a=>",a)
// console.log("after b=>",b)

let c =10
console.log(a===c)
// -----
function setName(name2){
    name2 ="shagugta"
}
let name ="john";
setName(name)
console.log(name)

// -----

var nam="shagufta"
function changeName(nameData){
    nameData ="Fatima"
    console.log("inside function", nameData)
}
console.log(nam)
changeName(nam)
console.log(nam)
// Pass By Reference
// In Pass By Reference, the reference or memory address of the variable is passed to the function, and changes made to the variable within the function affect the original variable. This is the behavior in JavaScript for objects (including arrays and functions).
// let obj = {
//     x:10,

// }
// function change(OBJ){
//     obj.x =30
// }
// change(obj)
// console.log(obj.x)

let obj = {
    name:"shagufta"

}
console.log(obj)
let obj2 = obj
// console.log(obj===obj2)
// console.log(obj2)
// obj2.name="Aakash"
// console.log(obj)
// console.log(obj2)
// console.log(obj===obj2)

// let obj3 = {
//     name:"shagufta"

// }
// console.log(obj===obj3)

// var person={
//     name:"shagufat",
//     age:22
// }
// function changeData(personData){
//     personData.name="fatima"
//     console.log("Inside function =>",personData)
// }
// console.log(person)
// changeData(person)
// console.log(person)
// console.log(person);console.log(person)