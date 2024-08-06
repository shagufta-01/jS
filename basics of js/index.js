// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };
// student['rollNo']=210
// student["total"]=function(){
//     return 100+200
// }
// student.total()
//     console.log(student)
  
    // const person1 = {
    //   firstName: "John",
    //   lastName: "Doe",
    //   age: 50,
    //   eyeColor: "blue"
    // };
    
    // // Create Source Object
    // const person2 = {firstName: "Anne",lastName: "Smith"};
    
    // // Assign Source to Target
    // // Object.assign(person1, person2);
    // console.log(  Object.assign(person1, person2))
    // const person={
    //   Fname:"shagufta",
    //   Lname:"fatima",
    //   age:21,
    //   course:"btecch"}
    //   let obj = Object.entries(person)
    
    //   console.log(obj)
    
    //   let elem1 = obj[1];
      
    
    // console.log(elem1);
    //   let res = elem1.includes('fatima');
    //   const finalResult = res && elem1[1] === 'Lname' 
    //   console.log(finalResult)
    
    // const message = 'Hello world' // Try edit me

    // Update header text
    // document.querySelector('#header').innerHTML = message
    // Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
    
    // var library = [ 
    //    {
    //        author: 'Bill Gates',
    //        title: 'The Road Ahead',
    //        readingStatus: true
    //    },
    //    {
    //        author: 'Steve Jobs',
    //        title: 'Walter Isaacson',
    //        readingStatus: true
    //    },
    //    {
    //        author: 'Suzanne Collins',
    //        title:  'Mockingjay: The Final Book of The Hunger Games', 
    //        readingStatus: false
    //    }];
    //  for(let i in library){
    //   if(library[i].readingStatus){
    //     console.log("already reading")
    //   }
    //   else{
    //     console.log("not reading")
    //   }
    //  }
    // Write a bubble sort algorithm in JavaScript.
    // Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
    // Sample Data: [6,4,0, 3,-2,1]
    // Expected Output : [-2, 0, 1, 3, 4, 6]
    // function bubble_sort(input){
    //   for(let i=0; i<input.length; i++){
    //     for(let j=0; j<input.length-i-1; j++){
    //       if(input[j]>input[j+1]){
    //    var temp = input[j]
    //                 input[j] = input[j + 1]
    //                 input[j + 1] = temp
    //       }
    //     }
    //   }
    //   console.log(input)
    // }
    // let data= [6,4,0, 3,-2,1]
    // console.log(bubble_sort(data))
    
    // function bubbleSOrt(input){
    
    //   let checked;
    //   for(let i=0; i<input.length; i++){
    //     checked = false
    //     for(let j=0; j<input.length-i-1; j++){
    //       if(input[j]>input[j+1]){
    //        [ input[j],input[j+1]]=[input[j+1],input[j]]
    //        checked = true
    //       }
    //     }
    //   if(!checked){
    //     break
    //   }return input}
    
      
    // }
    // const sortedArray = bubbleSOrt([45, 23, 3, 5346, 5, 356, 243, 35]);
    // console.log("Sorted Array:");
    // console.log(sortedArray);
    // var library = [ 
    //    {
    //        title:  'The Road Ahead',
    //        author: 'Bill Gates',
    //        libraryID: 1254
    //    },
    //    {
    //        title: 'Walter Isaacson',
    //        author: 'Steve Jobs',
    //        libraryID: 4264
    //    },
    //    {
    //        title: 'Mockingjay: The Final Book of The Hunger Games',
    //        author: 'Suzanne Collins',
    //        libraryID: 3245
    //    }];
    // // console.log(res);
    // function compare( a, b ) {
    //   if (  a.libraryID < b.libraryID ){
    //     return 1;
    //   }
    //   if ( a.libraryID > b.libraryID ){
    //     return -1;
    //   }
    //   return 0;
    // }
    
    // let result =library.sort( compare );
    // console.log(result)
    // }
    // const fruits = [
    //   ["apples", 300],
    //   ["pears", 900],
    //   ["bananas", 500]
    // ];
    // let res = Object.entries(fruits)
    // console.log(res)
    // const myObj = Object.fromEntries(fruits);
    // console.log(myObj.bananas)
    // console.log(JSON.stringify(window.location))
    // function swapKeysAndValues(obj) {
    //     return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
    // }
    // const originalObject = { a: 1, b: 2, c: 3 };
    // const swappedObject = swapKeysAndValues(originalObject);
    // console.log(swappedObject);  // Output: { 1: 'a', 2: 'b', 3: 'c' }
    
    // function swap(obj){
    //   return Object.fromEntries(Object.entries(obj).map(([k,v])=>[v,k]))
    // }
    // console.log(swap( { 1: 'a', 2: 'b', 3: 'c' }))
    // function swap_obj(obj){
    //   return Object.fromEntries(Object.entries(obj).map()())
    // }
    // let elem = document.createElement('p');
    // console.log(elem instanceof Element,"hey")

    // const person ={
    //   fname:"shagufta"
    //   ,lname:"fatima"
    //   ,age:21,
    //   course:"B.tech"
    //   ,thiskeyWord:function(){
    //     console.log(this,"first this")
    //     console.log(this,"thisssssssss");
     
    //     console.log(this.fname,"fname")
    //     return this.fname +" "+ this.lname+ " ",this.age," ",this.course
    //   }
    // }
    // person.thiskeyWord()
    // // console.log(person,"personnn")
    // console.log(this,"this")
  //   function getThis() {
  //     return this;
  //   }
    
  //   const obj1 = { name: "obj1" };
  //   const obj2 = { name: "obj2" };
    
  //   obj1.getThis = getThis;
  //   obj2.getThis = getThis;
  //   console.log(obj2.getThis())
  //   console.log(obj1.getThis())
  //  console.log( getThis())
  //  const obj3 = {
  //   __proto__: obj1,
  //   name: "obj3",
  // };
  // console.log(obj3.getThis())
  // function getThisStrict() {
  //   "use strict"; // Enter strict mode
  //   return this;
  // }
  
  // Only for demonstration — you should not mutate built-in prototypes
  // Number.prototype.getThisStrict = getThisStrict;
  // console.log(typeof (1).getThisStrict());

  // const user={
  //   name:"Shagufta",
  //   logMessage(){
  //     console.log(this.name)
  //   },
  // };
  // setTimeout(user.logMessage, 1000)//op=undefined
  // setTimeout(()=>{
  //   user.logMessage()
  // },1000)//op=shagufta
  // const user={
  //   name:"shagufta",
  //   greet(){
  //     return `Hello , ${this.name}!`
  //   },
  //   farwell:()=>{
  //     return `Goodbye, ${this.name}!`
  //   },
  // };
  // console.log(user.greet());//op=Hello , shagufta!
  // console.log(user.farwell())//pt Goodbye, !
  // let calculator={
  //   read(){
  //     this.a = +prompt("a=",0)
  //     this.b =+prompt("b=",0)
  //   },
  //   sum(){
  //     return this.a+this.b;
  //   },
  //   mul(){
  //     return this.a*this.b
  //   },
  //   sub(){
  //     return this.a-this.b
  //   }
  // };
  // calculator.read()
  // console.log(calculator.sum(),"sum")
  // console.log(calculator.mul(),"mul")
  // console.log(calculator.sub(),"sub")


  // var length=12
  // function callBack(){
  //   console.log(this.length,"sadfghj")
  // }
  // const obj ={
  //   length:4
  //   ,method(fn){
  //     fn();
  //   }
  // }
  // obj.method(callBack)//OP=12 sadfghj
//   const calc ={
//     total:0,
//     add(a){
// this.total =this.total+a
// return this
//     },

//     mul(b){
//       this.total= this.total*b
//       return this
//     },
//     sub(c){
//       this.total=this.total-c;
//       return this
//     }
//     ,
//     add(d){
//       this.total = this.total+d
//       return this
//     },
//   }
//   const result =calc.add(10).mul(5).sub(30).add(10)
//   console.log(result)


// var obj ={name:"shagufta"}
// function sayHello(){
//   return "Hello" +this.name
// }
// console.log(sayHello())//op=hello we want print  but this is not gonna happend so we use call keyword
 
// var obj ={name:"shagufta"}
// function sayHello(age){
//   return "Hello" +this.name +"is "+ age
// }console.log(sayHello(23))

//  --bind--
// var obj ={name:" shagufta"}
// function sayHello(age,profession){
//   return "Hello" +this.name +" is "+ age+" "+profession;
// --call---
// }console.log(sayHello.call(obj,23,"sdfghjk"))//we pss like this arg
// --appply--
// console.log(sayHello.apply(obj,[123,2324]))
// let bindFun=sayHello.bind(obj)
// console.log(bindFun(123,"binddd"))

// const person = {
//   fullName: function(city,country) {
//     return this.firstName + " " + this.lastName+" "+ " "+city+" , "+country;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// This will return "John Doe":
// console.log(person.fullName.call(person1));
// console.log(person.fullName.call(person2,"jaipur","India"))
// console.log(person.fullName.apply(person2,["Oslo", "Norway"]))
// console.log(Math.max(1,23,3))
// console.log(Math.max.apply(null, [1,2,3]))

// ---bind()---
// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// let fullName = person.fullName.bind(member);
// console.log(person.fullName.bind(member))
// console.log(fullName,"sdf") //op=Hege Nilsen

// const person ={
//   firstname:"shagufta"
//   ,lastname:"fatima",
//   display:function(){
//     return this.firstname+ " "+ this.lastname
//   }
// }
// const member1={
// firstname:"Aakash",
// lastname:"Ayoob"
// }
// setTimeout(()=>{

  // console.log(person.display.bind(member1))
// let res=person.display.bind(member1)
// console.log(res)
// },4000)
// setTimeout(person.display,3000)

// var person={
//   name:"shagufta",
//   age:20,
//   getAge:function(){
//     return this.age
//   }
// }
// const age=21
// const person2={
// age:23
// }
// console.log(person.getAge())//op=20
// console.log(person.getAge.call(age))//op=undefined
// console.log(person.getAge.apply(age))//op=undefined
// console.log(person.getAge.bind(age))//op=fun return
// console.log(person.getAge.call(person2))//op=23
// console.log(person.getAge.apply(person2))//op=23
// console.log(person.getAge.bind(person2))//op=fun return


// var status =12;
// setTimeout(()=>{
//   const status =1
//   const dis={
//     status:2,
//     getstatus(){
//       return this.status
//     }
//   }
  // console.log(dis.getstatus())//op=2
  // console.log(dis.getstatus(this))//op=2

//   console.log(dis.getstatus.call(this))//op=undefined
// })

// const animals=[
//   {species:"Lion", name:"King"},
// {species:"whale",name:"Queen"}
//  ,
// ]
// function printAnimls(i){
// this.print = function(){
//   console.log("#"+i+" "+this.species+" "+this.name)

// }
// this.print()
// }
// for(let i=0; i<animals.length; i++){
//   printAnimls.call(animals[i],i)
// }

//question append an array to another array
// const arr = ["a","b","c"]
// const elmt =[1,3,4]
// arr.push.apply(arr,elmt)
// console.log(arr)
// elmt.push.apply(elmt,arr)
// console.log(elmt)

//question using apply to enhance built-in function
//find min $ max numer in an arr

// const array =[2,43,54,1,6,-2,23]
// console.log(Math.max.apply(null, array))
// console.log(Math.min.apply(null, array))


//bound function
// function f(){
//   console.log(this)
// }
// let user ={
//   g:f.bind(null)
// }
// user.g()//op=window obj

//question bind chainging//op=bind chaining never exist
// function f(){
//   console.log(this.name)
// }
// f=f.bind({name:"jobn",}).bind({name:"ann"})
// f()

// question fix the line 22 to make code work properly
// function checkPassword(success, failed){
//   let password =prompt("password","")
//   if(password=="theVlogSpot") success()
//   else failed()
// }
// let user={
//   name:"shagfta fatima",
//   loginSuccessful(){
//     console.log(`${this.name} logged in`)
// //   },
//   loginFailed(){
//     console.log(`${this.name},failed to log in`)
//   }
// }
// checkPassword(user.loginSuccessful.bind(user),user.loginFailed.bind(user))


// function sum(){
//   let maths=90, english=23, science=23
//   var s = maths+english+science
//   return s
// }
// function total(){
//   return sum()/300*100
// }
// console.log(total(23,45,12))
// // console.log(sum(23,12,34))
// console.log(sum())
// console.log(toCalcious(77))
// let toCalcious=(input)=>{
//   return (5/9)*(input-32)
// }
// console.log(toCalcious(77))

// arrow function
// let arrow = name =>`hello ${name}`
// console.log(arrow("Aakash"))


// function sumVal(...vals){
//   let total =0;
//   for(let i of vals){
//     total +=i
//   }
//   return total
// }
// let n =[1,45,6,7,33,5,34,24];
// // console.log(sumVal(...n," ", typeof n))
// function myFun(a,b,...res){
//   console.log(a,b,res)
//   let c =a+b+res
//   return c
// }
// console.log(myFun(1,45,6,7,33,5,34,24))

// function Dada(){
//   var name ="Amalesh kumar"
//   function papa(){
//     console.log(name,"namee")
//     var likes=31
//     function beta(){
//       console.log(name,"beta")
//       var share=3213
//       console.log(share,"share")
//     }
//     beta()
//   }papa()
// }Dada()

// impure function

// var x = 10
// function add(){
//   console.log(x)
//   x++
// }
// add()
// add()
// add();add()
// add()

// pure function
// function sum(x,y){
// return x+y
// }
// console.log(sum(23,45))
// console.log(sum(2233,452))

// 

// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);
// const add2 = makeAdder(34)
// console.log(add5(2)); // Output: 7
// console.log(add10(2));
// console.log(add2(2))
// ----Advanced JavaScript Tutorial in Hindi [Part 94] - JavaScript Callback Function---
// function sayHello(){
//   console.log("Hello world")
// }
// function add(n1,n2,callback){
//   console.log(n1+n2)
//   callback()
// }
// let a =10
// let b=12
// add(a,b,sayHello)

// function sum(a,b,callback){
//   console.log(a+b)
// callback()
// }
// console.log(sum(2,3,calArea))

// function calArea(radius){
// console.log( 2*radius*radius)
// }
// function calculate(radius,difOp){
//   let output=[]
//   for(let i=0; i<radius.length; i++)
//     {
//       output.push(radius[i])
//       difOp()
//     }
//     return output
// }
// let radius =[1,2,3]
// calculate(radius,calArea)
// function myFun(a,b,callback){
//   console.log(a+b)
//   callback()

// }
// function sayHey(){
//   console.log("Hello shagufta")
// }
// myFun(12,33,sayHey)
// function calculate(rad, logics){
// console.log(2*rad*rad)
// logics()
// }
// function area(){
//   console.log(2*Math.PI)
// }
// function circumtences(r){
//   console.log(2*r)

// }
// calculate(2,area)
// calculate(12,circumtences)


// function sayHello(input, callBack){
//   return input*input+callBack()


// }
// function hello(){
//   console.log("hello ")
// }
// function hi(){
//   console.log("hiii")
// }
// sayHello(12,hi)
// sayHello(232,hello)
// sayHello(2,function(){//anomonous function
//   console.log("shagufta")
// })





// ---curry in js---
// function sendAutoEmail(to){
//   return function(subject){
//     return function(body){
//       console.log(`sending eamil to ${to}, with the subject ${subject},HEY ${body} HERE IS SOMEHTING FOR YOU`)
//     }
//   }
// }
// sendAutoEmail("shaguftaftaima444@gmail.com")("New Order Confirmation")("this is for you")

// or
// let step1 = sendAutoEmail("shaguftaftaima444@gmail.com")
// let step2=step1("new Orderr")
// step2("Hey! asuu")

// function dada(a){
//   return function papa(b){
//     return function beta(c){
//       return a+b+c
//     }
//   }
// }
// console.log(dada(23)(2)(1))

// let text = "Please locate where 'locate' occurs!";
// let index = text.match("locate");
// console.log(index, text)

// let tet = "Please locate where 'locate' occurs!";
// let ind = tet.startsWith("loc",5);
// console.log(ind, tet)

let root1, root2;
let a=prompt("enter first number here")
let b = prompt("enter second number here")
let c = prompt("enter third number here")
let discriminate =b*b-4*a*c
if(discriminate >0){
  root1=(-b+Math.sqrt(discriminate))/(2*a)
  root2 = (-b-Math.sqrt(discriminate))/(2*a)
}










































































