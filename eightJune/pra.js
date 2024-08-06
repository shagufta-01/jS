// function fib(n){
    
//     let a=0;
//     let b=1;
//     let c = 0
//     let result=[]
//     if(n<0){
//         console.log("enter valid number:");
//     }
//     for(let i=0; i<n; i++){
//          c= a+b
//         result.push(c)
//         a=b;
//         b=c
//     }
//     return result
// }
// console.log(fib(10))
// console.log(fib(-9))


// function fibonacci(n) {
//     let x = 0;
//     let y = 1;
//     let z = 0;
//     let result = [];
  
//     for (let i = 0; i < n; i++) {
//       z = x + y;
//       result.push(z);
//       x = y;
//       y = z;
//     }
  
//     return result;
//   }
  
//   console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

  function fibonahii(n){
    let a=0; 
    let b=1;
    let fab =[]
    for(let i=0; i<n; i++){
      let c= a+b
      fab.push(c)
      a=b
      b=c
    }
    return fab
  }
  console.log(fibonahii(6))