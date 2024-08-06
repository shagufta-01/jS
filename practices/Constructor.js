// class student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         console.log(name,age,"constuctor is a function")
//     }
//     hello(){
//         console.log(`"Hello "+${this.name}+" "+${this.age}`)
//     }
// }
// let a = new student("shagufta",21);
// let b = new student("aakash",22);

// // a.name="shagufta"
// a.hello()
// b.hello()


// class car{
  

//     constructor(brand,model){
//         this.carname = brand;
//         this.model=model
//     }
//     parents(){
//         console.log(`this is a ${this.carname} and ${this.model}`)
//     }
// }
// class Model extends car{
//     constructor(brand,mod){
//         super(brand)
//         this.model= mod
//     }
//     show(){
//         console.log(`${this.parents} +its your model ${this.model}`)
//     }
// }
// // let mycar = new car("Ford")
// let Mycar1 = new Model(345,"suzuki","cxvz")
// // mycar.parents()
// Mycar1.show()
// Mycar1.parents()


// function person(name,  age){
//     this.name=name
//     this.age=age
// }
// const persons =new person("johhn", 12)
// console.log(persons.name)
// console.log(persons.age)
// const a = new person("unique",324)
// const c = new person("problem" ,123)
// console.log(a.name)
// console.log(a.age)
// console.log(c.name)
// console.log(c.age)

// class polygon{
//     constructor(name){
//         this.name=name
//     }
//     introduce(){
//         console.log(`hello ,my friends ${this.name}`)
//     }
// }
// const poly1 = new polygon("polygon")
// console.log(poly1);
// class square extends polygon {
//    printCustome(){
//     return `validation failed:-((details ${this.message}))`
//    }
// }
// try{
//     throw new
// }
// console.log(Number("3.14"))
// console.log(Number(Math.PI))
// console.log(Number(" "))
// console.log(Number(""))
// console.log(Number("99 88"))
// console.log(Number("John"))
// const x = "123.34"
// console.log(parseInt(x, typeof x),typeof x)
// console.log(Number.isSafeInteger(12345678901234567890))


// function person(fname,lname,age,course){
// this.fname=fname;
// this.fname=lname
// this.age=age
// this.course=course
// this.nationality = "English";
// this.fullName=function(){
//     return this.fname+" "+this.lname
// }
// }
// person.prototype.branch="computer science and engineering";
// person.prototype.changeName = function(count){
//     this.age =count
// }
// console.log(person.changeName())
// const myself =new person("shagufta", "fatima",21,"B.tech")
// const myself2 = new person("Aakash","Ayoob",22,"pharmacy")
// const myMother = new person("Sally", "Rally", 48, "green");
// const mySister = new person("Anna", "Rally", 18, "green");
// console.log(myself.age)
// console.log(myself2.branch)
// console.log(mySister)

// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//     this.fullName = function() {
//       return this.firstName + " " + this.lastName;
//     };
//   }
//   myMother.changeName = function (name) {
//     this.lastName = name;
//   }
// Person.prototpe.nationality = "English";
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green");
//   const mySister = new Person("Anna", "Rally", 18, "green");
//  const mySelf = new Person("Johnny", "Rally", 22, "green");
//  console.log(myFather)
//  console.log(myMother)
//  console.log( mySelf )
//  console.log(mySister)
// myMother.changeName = function (name) {
//     this.lastName = name;
//   }

//  console.log( myMother.fullName())
//  console.log(mySister.fullName())
//  console.log( myMother.fullName())
//  Person.prototype.changeName = function (name) {
//     this.lastName = name;
//   }
// //  console.log(myMother.changeName(),"svc")
// console.log( myMother.changeName("Doe"))
//  console.log(mySelf)



// class Thing {
//     constructor(name) {
//         this.name = name;
//     console.log("A new thing was created.");
//     }
//     doSomething() {}
// }

// var x= Thing();

// function Thing (name) {
//     this.name = name;
//     this.doSomething = function (){};
//  console.log("A new thing was created.");
// }

// var x = new Thing();



// function getMultiples(n, len) {
//   return Array(len).fill(0).map((_, i) => n * (i + 1));}
//   console.log(getMultiples(7,5))

function getArray(n, len) {
  let arr = [];
  for (let i = 1; i < len+1; i++) {
    arr.push(i * n);
  }
  return arr;
}

console.log(getArray(7,5))