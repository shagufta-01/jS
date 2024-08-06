// const person = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//     fullName: function(age,city) {
//       return this.firstName + " " + this.lastName+" "+age+" "+city;
//     }
//   }
  
//   const person1 = {
//     firstName: "Mary",
//     lastName: "Doe"
//   }
//   const person2 ={
//     firstName:"sjkfl",
//     lastName:"hfiu"
//   }
//   // This will return "Mary Doe":
//   console.log(person.fullName.apply(person2,[21,"jaipur"]));
//   console.log(Math.max.apply(null, [1,2,3]));
//   console.log(Math.min.apply(" ",[1,234]))

// function recursive(arr,key,start,end){
//     if(start >end){
//         return -1
//     }
//     let mid = Math.floor((start+end)/2)
//     if(arr[mid]===key){
//         return mid
//     }
//     else if(arr[mid]<key){
//         return binaryRec(arr,key,mid+1,end)
//     }
//     else{
//         return binaryRec(arr,key,start,mid-1)
//     }
// }
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(recursive(arr, 5,0,8))