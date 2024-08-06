// memoization in js
// Memoization is an optimization technique used in JavaScript to store the results of expensive
//  function calls and return the cached result when the same inputs occur again. This can help to improve 
//  performance by avoiding redundant calculations. Memoization is particularly useful when a function is called 
//  multiple times with the same arguments.
// let preVal=[]

// function memoize(n){
// if(preVal[n]!=null){
//     return preVal[n]
// }
//     let output=[]
//     for(let i=0; i<n; i++){
//         for(let j=1; j<n; j++){
//             output =output+1
//         }
//     }
//     preVal[n]=output
//     return output
// }
// console.time()
// console.log(memoize(3))
// console.timeEnd()


// let preVal=[]
// function square(n){
// if(preVal[n]!=null){
//     return preVal[n]
// }
//     let res = n*n
//     return res
// }
// console.time()
// console.log(square(3))
// console.timeEnd()
// console.time()
// console.log(square(3))
// console.timeEnd()
// console.time()
// console.log(square(3))
// console.timeEnd()
// console.time()
// console.log(square(3))
// console.timeEnd()
// console.time()
// console.log(square(3))
// console.timeEnd()

// const random = Math.random()*(10-1)+1
// console.log(random)

// curring by bind fun and by clusure

// function multi(x){
//     return function(y){
// console.log(x*y)
//     }
// }
// multi(1)(3)

// function multiply(y){
// let x=2
// console.log(x*y)
// }
// const res = multiply.bind(this, 3)
// console.log(res(4))


// first classs function
// function squaree(n){
//     return n*n
// }
// function displaysquare(fu){
//     console.log("this is squrare "+fu(6))
// }
// displaysquare(squaree)
//iife


// (function(){
//     console.log(2*12)
// })();
// (function(){
//     let greetCount =0; 
//     function greet(){
//         greetCount++
//         console.log("Hello World!(" +greetCount+")")
//     }
//     greet()
//     greet()
//     greet()
// })()
// logNmame("shagufta")
// function logNmame(name){
    
//     console.log(`${name}, you are awesommw!`)
// }

// -function (p1,p2) {
//     // Code that runs in your function
//     console.log("Hello worldd")
//     console.log(`${p1},  and ${p2} `)
// }("world", "Hello");

// (function(){
//     function generateMagicNumber(){
//         return Math.floor(Math.random()*100)+900
//     }
//     console.log("this is your magic nu mber"+ generateMagicNumber())
//     var favNumber =1
//     console.log("this is your twice fav "+ favNumber*2)
// }
// )();
// !function() {
//     console.log('Welcome to the Internet. Please follow me.');
//   }();
//   (function (globalObj) {
//     //Access the globalObj
//     console.log(globalObj)
    // })(window);


    // function greet(name){
    //     return `Namaste js ${name} `
    // }
    // console.log(greet("shagufta"));

    // (function(name){
    //     console.log(`Namaste js in ${name}`)
    // })("Fatima")

    // (function(a, b){
    //     console.log(a+b);
    // })(5,5);
    // let calculate ={
    //     add:function(a,b){
    //         return a+b
    //     },
    //     mul:function(a,b){
    //         return a*b
    //     }
    // }
    // console.log(calculate.add(4,3))
    // console.log(calculate.mul(5,4))
    

    function fibbonaci(n){
        let fibArr=[0,1];
        for(let i=2; i<=n;i++ ){
            let x = fibArr[i-1]+fibArr[i-2];
            fibArr.push(x)
        }
        return fibArr
    }
    console.log(fibbonaci(10))
    
    
    function fibSeries(n){
        let a=0;
        let b=1
        let result = [];
        for(let i=2; i<=n; i++){
    let c = a+b
    result.push(c);
    a=b;
    b=c
    
    }
    return result;
    }
    console.log(fibSeries(10))
    