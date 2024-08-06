console.log("obj");
const myObj = {name: "John", age: 31, city: "New York"};
const myJSON = JSON.stringify(myObj);
let text=localStorage.getItem("testJSON", myJSON);
console.log(text)