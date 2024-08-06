// const  person={
//     fname:"Shagufta",
//     lname:"fatima",
//     age:22,
//     eyeColor:"brown",
//     fullName(){
//         return "my name is " +this.fname + this.lname +"and I'm "+this.age +"and my Eyes colors are "+this.eyeColor;
//     }
// }
// const {fname,lname,age,eyeColor} =person
// console.log(person)
// console.log(fname)
// console.log(lname)
// console.log(age)
// console.log(eyeColor)
// const myarr = Object.assign(person)
// console.log(myarr)
// const objNew ={}
// Object.assign(objNew,person)
// console.log(objNew)
// console.log(person.fname)
// console.log(person.lname)
// console.log(person.age)
// console.log(person.eyeColor)


// const person = new Object();

// Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.mycars.car;
// person.eyeColor = "blue";
// person['branch']="B.tech"
// delete person['age']
// console.log(person)

// const obj = Object.create({
//     name:"Code",
//     ip:"12343",
//     id:"847324"
// })
// delete obj.name
// const oobjNew ={}
// Object.assign(oobjNew,obj)
// console.log(oobjNew)
// console.log(obj)
// console.log(obj.name)
// console.log(obj.id)
// console.log(obj.id)


// const  person={
//     fname:"Shagufta",
//     lname:"fatima",
//     age:22,
//     eyeColor:"brown"}


    // const person1 = {
    //     firstName: "John",
    //     lastName: "Doe",
    //     id: 5566,
    //     fullName: function() {
    //       return this.firstName + " " + this.lastName;
    //     }
    //   };

//       const res = Object.assign({},person,person1)
//       console.log(res);
//       const spread ={...person,...person1}
//       console.log(spread)


//     const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const newObj = Object.assign({}, obj1, obj2);
// const spreadd = {...obj1,...obj2}
// console.log(spreadd,"spreadd Operator",obj1,"=>",obj2)
// console.log(newObj,"object.aassing",obj1,"=>",obj2);

// const user = {
//     name:'John',
//     age:30,
//     country:'USA'

// }
// const {name,age=67, country} = user
// console.log("before",name," ",age," ",country)
// const clone ={...user,age:34};
// console.log(clone)

// console.log("afterrr  "+name," ",age," ",country)

// const assignn=Object.assign({}, user);
// console.log(assignn," =>",user)


// let arr =[1,2,3,4,5,3,4,6,6,7,88]
// let [a,b,c,d,...res] =arr
// console.log(a,b,c,d,...res)
// let [a,,,,...res] =arr
// console.log(a,...res)

// let arr1 =[2,3,4,43,4,435,12,32,1]
// let arr2 ={...arr1}
// console.log(arr2)

// function sum(a,b,c){
//     return a+b+c
// }

// console.log(...arr1)
// console.log(sum(...arr1))

// const  person={
//     fname:"Shagufta",
//     lname:"fatima",
//     age:22,
//     eyeColor:"brown",
    // fullName(){
    //     return "my name is " +this.fname + this.lname +"and I'm "+this.age +"and my Eyes colors are "+this.eyeColor;
    // }
// }
// const teacher={
//     fname:"peter",
//     lname:"parker",
//     age:32,
//     eyeColor:"pink",

// }
// console.log(person.fullName.call(teacher))
// const res = Object.assign({},teacher,person)
//     console.log(res,"ress")
//     const spreadd ={...person,...teacher}
//     console.log(spreadd)
// const teacher={
//     fname:"peter",
//     lname:"parker",
//     age:32,
//     eyeColor:"pink",

// }
// // delete teacher.age
// // const res = Object.getOwnPropertyNames(teacher)
// const res = Object.keys(teacher).length
// console.log(res)
// console.log(teacher)

// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];
//     library.forEach((itm)=>{
//         if(itm.readingStatus){
//            console.log(true) 
//         }else{
//             console.log(false)
//         }
//     })
    // console.log(library())
//    function Cyclinder(){
//         constructor(radius, height){
//             this.radius=radius
//             this.height =height
//         }
//         getVolume() {
//             const p1=3.14;
//             return (Math.PI*Math.pow(this.radius,2)*this.height).toFixed(4)
//         }
//     }
//     const cyclinereee =new Cyclinder(4,5)
//     console.log(Cyclinder)

function  bubbleSort(input){
    const length = input.length;
    for(let i=0; i<length-1; i++){
        for(let j=0; j<length-i-1; j++){
            if(input[j]>input[j+1]){
                const temp = input[j]
                input[j]=input[j+1]
                input[j+1]=temp
            }
        }
    }return input
}
console.log(bubbleSort([12,3,44,-3,8,12,3]))

let d = Date.parse("March 21, 2012");
const res = new Date(d);
console.log(res)