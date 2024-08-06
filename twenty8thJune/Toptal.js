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



// ---->
var a={},
    b={key:'b'},
    c={key:'c'};

a[b.key]=123;
a[c.key]=456;
console.log(Object.entries(a))

console.log(a[b]);
console.log(a[c]);
// console.log(false == '0')
// console.log(false === '0')

// console.log("0 || 1 = "+(0 || 1));
// console.log("1 || 2 = "+(1 || 2));
// console.log("0 && 1 = "+(0 && 1));
// console.log("1 && 2 = "+(1 && 2));
// ----------->
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" + //123
        "innerArg = " + innerArg + "\n" + //456

        "outerVar = " + outerVar + "\n" + //123
        "innerVar = " + innerVar + "\n" + //456
        "globalVar = " + globalVar + //xyz

        "outerVar = " + outerVar + "\n" + //123
        "innerVar = " + innerVar + "\n" + //456
        "globalVar = " + globalVar + //xyz

        "outerVar = " + outerVar + "\n" + //123
        "innerVar = " + innerVar + "\n" + //456
        "globalVar = " + globalVar); //xyz
        
    
    })(456);
})(123);



// console.log(0.1 + 0.2); ///0.30000000000000
// console.log(0.1 + 0.2 == 0.3); //fallse bcoz  JavaScript checks for exact equality, so it returns false.
// console.log(0.3 == 0.3)
// ----->
(function(){
    let a= b=4;
})()
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// ------>
var myObject = {
    foo: "bar",
    func: function() {
        // var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        // console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log(this.foo)
            console.log("inner func:  this.foo = " + this.foo);
            // console.log("inner func:  self.foo = " + self.foo);
        }());
    }
}; 
myObject.func()

// ---------->
var length = 10;
function fn() {
	console.log(this.length);
}


// (()=>{
//     console.log(1)
//     setTimeout(()=>{
//         console.log(2)
//     },100)
//     setTimeout(()=>{
//         console.log(3)
//     },0)
//     console.log(4)
// })()


function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return  {
      bar: "hello"
  };
}
console.log(foo1())
console.log(foo2())

console.log(0.1 + 0.2 == 0.3, typeof (0.1));

// for (var i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// }

// console.log(typeof typeof 1);
// console.log(a[6]);

// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);/


