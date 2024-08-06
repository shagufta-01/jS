// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   person.course="B.tech";
//   person.name = function () {
//     return this.firstName + " " + this.lastName;
//   };
//   console.log(person)
const person = {
    fname:"shagufta",
    lnmae:"Fatima",
    age:21,
    course:"B.Tech",
    Branch:"Computer Science and engineering",
    fullNmae(){
        this.fname + " "+this.lnmae
    }

}
 const person1={
    name: "John",
    age: 30,
    city: "New York",
    course:"B.tech",
    Branch:"Civil enineering"

 }
//  console.log(person.call(person1))
const myarr =Object.values(person1)
console.log(myarr, typeof myarr)
const newAr =Object.entries(person1)
console.log(newAr,typeof newAr)
let myString = JSON.stringify(person);
console.log(myString,typeof myString)

