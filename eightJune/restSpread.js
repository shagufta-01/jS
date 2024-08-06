// Rest Operator: The rest operator is used to capture the rest of the arguments passed to a function into an array. It takes one or more non-rest parameters followed by three dots (…) and then a parameter name. The rest operator collects all the values passed after the three dots into an array
function myBio(firstName, lastName, ...otherInfo) {
    return otherInfo;
  }
  
  console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"));
  // Output: ["CodeSweetly", "Web Developer", "Male"]

// for and while diff call,apply,bind------>

//   Spread Operator: The spread operator is used to expand an iterable (such as an array or string) into individual elements. It can be used in three ways:
let arr = [1, 2, 3, 4, 5];
let newArr = [...arr, 6, 7, 8, 9];
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

function myFunction(a, b, c) {
  console.log(a, b, c);
}

myFunction(...arr);
// Output: 1 2 3

// let splicee ="These loops execute indefinitely"
// let res = splicee.splice(5,2,"")


// when you want to last Element
// let ar=[1,2,34,5,50]
// let lastElement =ar[ar.length-1] 
// console.log(lastElement)

const person ={
  fname:"Shagufta",
  lname:"fatima",
  fullName:function(){
    return this.fname + " " + this.lname
  }

}
console.log(person.fullName())

function  fibSeries(n){
  let a=0;
  let b=1;
  let result=[]
  for(let i=1; i<n; i++){
      let c = a+b
      result.push(c)
      a=b
      b=c
  }
  return result
}

