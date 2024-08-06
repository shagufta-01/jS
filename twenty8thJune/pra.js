// (function(x) {
//     return (function(y) {
//         console.log(x);
//     })(2)
// })(1);


// ((x)=>{
//     return ((y)=>{
//         console.log(x,y)
//         return y
//     })(23)
// })(12)

// console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));

var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

// console.log(a[b]);
// console.log(a[c]);
// console.log(false == '0')
// console.log(false === '0')

// console.log("0 || 1 = "+(0 || 1));
// console.log("1 || 2 = "+(1 || 2));
// console.log("0 && 1 = "+(0 && 1));
// console.log("1 && 2 = "+(1 && 2));

// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         "outerArg = " + outerArg + "\n" + //123
//         "innerArg = " + innerArg + "\n" + //456

//         "outerVar = " + outerVar + "\n" + //123
//         "innerVar = " + innerVar + "\n" + //456
//         "globalVar = " + globalVar + //xyz

//         "outerVar = " + outerVar + "\n" + //123
//         "innerVar = " + innerVar + "\n" + //456
//         "globalVar = " + globalVar + //xyz

//         "outerVar = " + outerVar + "\n" + //123
//         "innerVar = " + innerVar + "\n" + //456
//         "globalVar = " + globalVar); //xyz
        
    
//     })(456);
// })(123);

function foo1()
{
  return {
      bar: "hello"
  };
}
console.log(foo1())

function foo2()
{
  return {
      bar: "hello"
      
  };
}
console.log(foo2())