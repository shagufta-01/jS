// // Destructuring Array
// const [a,b,c] = [1,2,3]
// [a,b,c]=[b,c,a]
// // console.log(arr)
// console.log(a)
// console.log(b)
// console.log(c)



// const [a,b,c] = [1,2,3]
// [a,b,c]=[b,c,a]
// console.log(arr)
// let userr =["shagufta" , 21,"jaipur",["Male", 250000]];
// // let [name, age=34, city,[gender,salary]] = userr
// let [name, ...args] = userr
// console.log(name)
// console.log(args)
// console.log(city)
// console.log(gender)
// console.log(salary)


// function user(){
//     console.log(name)
//     console.log(age)
//     console.log(city)
// return ["shagufta", 21, "jaipur"]

// }
// let [name, age, city] = user()
// console.log(city)
// const colors= ["red", "pink","orange","gray", "purple","white", "blue"];
// [colors[0], colors[4]]=[ colors[4], colors[0]]
// console.log(colors)

// const colors=["red", "blue", "green", "pink", "orange", "purple"];
// const [r,bl,g,p,o,pr]=colors
// console.log(r)
// console.log(bl)
// console.log(g)
// console.log(p)
// console.log(o)
// console.log(pr)

// Destructuring Object
// let user ={
//     name:"Shagufta",
//     age:21,
//     city:"Jaipur"
// }
// let {name,age,city}=user
// console.log(name)
// console.log(age)
// console.log(city)


// const person1 ={
//     fname:"spingebob",
//     lname:"squarePants",
//     age:21,
//     job:"Fry cook"
// }

// const person2 ={
//     fname:"newFloder",
//     lname:"fifth",
//     age:31,
//     // job:"Fry cook"
// };

// const {fname, lname, age, job}=person1;
// const {fname, lname, age, job="employee"}=person2;
// console.log(fname,lname,age, job)

//  destructureing in function perameter in JS
// function displayPerson({fname, lname, age, job}){
// console.log(`name:${fname} ${lname}`)
// console.log(`age:${age}`)
// console.log(`job:${job}`)
// }

// const person2 ={
//     fname:"newFloder",
//     lname:"fifth",
//     age:31,
//     job:"Fry cook"
// };
// const person1 ={
//     fname:"spingebob",
//     lname:"squarePants",
//     age:21,
//     job:"Fry cook"
// }
// displayPerson(person1)
// displayPerson(person2)


// function calu(a,b){
//     const add =a+b
//     const sub = a-b
//     const mul = a*b
//     const div =a/b
//     return [add, sub,mul,div]
// }

// const [add, sub, mul,div] = calu(4,3);
// console.log(add," ",sub," ",mul," ",div)

// const vehicleOne ={
//     brand:"Ford",
//     model:"Mustang",
//     type:"car",
//     year:2021
// }
// myVichee(vehicleOne)

// function myVichee(){

//     const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';

// }