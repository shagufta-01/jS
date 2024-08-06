// let a ={
//     name:"SHagufta",
//     language:"javascript",
//     run:()=>{
//         console.log("self run");
//     }
// }
// console.log(a)

// let p={
//     run:()=>{
//        console.log("run");
//     }
// }
// a.__proto__=p
// a.__proto__={
//     n1:"Fatima"
// }
// a.run()
// console.log(a.n1)
// p.__proto__ =a
// console.log(p.n1)
//------------------->2nd
// let arr = ["shagufta", "fatiam"]
// console.log(arr)
// let obj={
//     name:"Shaguftaaa",
//     city:"Jaipur",
//     getIntro:()=>{
// console.log(this.name+"from"+this.city)
//     } 
// }
// let obj2={
//     name:"Aakash"
// }
// obj2.__proto__=obj//obj2 can inherit the peoperty of obj
// console.log(obj2.city)

// function.__proto__.myBind = function(){
//     console.log("dahjklfd")
// }
// function fun(){

// // }
// console.log(myBind())
// console.log(fun.proto__.myBind())
// obj2.__prototype__//never do this

//------------------->3rd
// function myFun(){
//     console.log("HEllo")
// }
// myFun.prototype.myNewPro="Hello World"
// let myOBj= new myFun()
// console.log(myOBj.myNewPro,typeof myOBj,typeof myNewPro,typeof myFun)


// let objj={
//     name:"shaguta",
//     lname:"fatima"
// }
// console.log(+ objj);
// console.log(objj.length)
// let str =JSON.stringify(objj);
// // console.log(str,typeof str)
// console.log(str.length)
// let newarr=str.split(" ,")
// // console.log(newarr.length)
// // console.log(newarr)
// // console.log(str[0]);
// // console.log(str[1]);
// for(let i=0;i<newarr.length;i++){
//     console.log(newarr[i],i);
// }

// const num = 5
// const num1 = 0 + num 
// console.log(typeof num1);