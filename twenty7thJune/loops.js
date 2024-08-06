function makeFunc() {
    let x = "Mozilla";
    let myFunc = function() {
      console.log(x);
    };
    return myFunc;
  }
  
  const myFunc = makeFunc();
  myFunc();  // Output: Mozilla

  function makeAdder(x) {
    let sum = 0;
    return function(y) {
      sum += y;
      return sum;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(2));  // Output: 7
  console.log(add5(3));  // Output: 10
  console.log(add10(2));  // Output: 12
  console.log(add10(3));  // Output: 15