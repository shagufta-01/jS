// const str="property Returns the length of a string      "
// const str2 ="JavaScript String "
// let res = str.indexOf("the",19)
// let resu = str.search("the")
// let resul = str.endsWith("the")
// console.log(res)
// console.log(resu)
// console.log(resul)

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Lemon"];
// const  res =fruits.slice(2);
// console.log(res,fruits)
// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);
// console.log(spliced, months)
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findLast(myFunction);

// function myFunction(value, index, array) {
// return value>=18
// }
// console.log(first,numbers)
const cars =[
    {name:"whale", species:"Queen"},
    {name:"Lionn", species:"King"}
]
// for(let i in cars){
//     console.log(cars[i])
// }
// let res = cars.sort((a,b)=>a.name >b.name ? 1:-1)
// let result = cars.sort((a,b)=>a.species >b.species ?1:-1)
// let res = cars.sort((a,b)=>{
//     if(a.name <b.name){
//         return 1
//     }
//     else if(a.name>b.name){
// return -1
//     }
//     else{
//         return 0
//     }
// })
// let result = cars.sort((a,b)=>{
// if(a.species < b.species){
//     return 1
// }
// else if(a.species > b.species){
//     return -1
// }
// else{
//     return 0
// }
// })
// console.log(res)
// console.log(result)

// const myArr = [
//     {name:"X00",price:100 },
//     {name:"X01",price:10230 },
//     {name:"X02",price:1030 },
//     {name:"X03",price:10 },
//     {name:"X04",price:1100 },
//     {name:"X05",price:1 },
//     {name:"X06",price:1110 },
//     {name:"X07",price:0 }
//   ];

//   let res = myArr.sort((a,b)=> a.price <b.price ?1:-1 )
//   console.log(res)
//   let result = myArr.sort((a,b)=>{
//     if(a.price > b.price){
//         return 1
//     }
//     else if(a.price <b.price){
//         return -1
//     }
//     else{
//         return 0
//     }
//   })
//   console.log(result)

// const myArr = [
  //   {name:"X00",price:100 },
  //   {name:"X01",price:10230 },
  //   {name:"X02",price:1030 },
  //   {name:"X03",price:10 },
  //   {name:"X04",price:1100 },
  //   {name:"X05",price:1 },
  //   {name:"X06",price:1110 },
  //   {name:"X07",price:0 }
  // ];
//   myArr.forEach((val,index,arr)=>{
// console.log(val.price*3, index)
//   })
// let res =myArr.map((val)=>{
// return val.price*3
// })
// console.log(res)
// let res = myArr.flatMap((x)=>x.price*3)
// console.log(res)
// for(let i in myArr){
//     console.log(myArr[i])
// }
// let res =myArr.filter((val)=>{
// return val.price >100
// })
// console.log(res)

// let res = myArr.reduce((total,val)=>{
// return total+val
// })
// console.log(res)

// const numbers = [45, 4, 9, 16, 25];
// for(let i of numbers.entries()){
   
// console.log(numbers[i],i)
// }
// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March");
// console.log(myMonths)
// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year)


// console.log(parseFloat("10"))
// console.log(parseFloat("10.00"))
// console.log(parseFloat("3043sh"))
// console.log(parseFloat("00"))

// let text = "123456789";
// let pattern = /[^1-4]/g;
// let result = text.match(pattern);
// console.log(result)

// var s = '124sdg';
// var f = '3432kdnf';
// function num(n){


// if (s.startsWith(n)) {
//    return true
// }
// if (f.endsWith(n)) {
//    return false
// }}
// console.log(num(s))
// console.log(num(f))

// program where the user has to guess a number generated by a program

function guessNumber() {

  // generating a random integer from 1 to 10
  const random = Math.floor(Math.random() * 10) + 1;

  // take input from the user
  let number = parseInt(prompt('Guess a number from 1 to 10: '));

  // take the input until the guess is correct
  while(number !== random) {
      number = parseInt(prompt('Guess a number from 1 to 10: '));
  }

  // check if the guess is correct
  if(number == random) {
      console.log('You guessed the correct number.');
  }

}

// call the function
guessNumber();