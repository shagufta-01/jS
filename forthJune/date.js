// console.log("objjj")
// const d = new Date();
// // let text = d.toLocaleDateString();
// let text = d.toLocaleTimeString();
// let text = d.toLocaleString("hi-IN ");
// console.log(text,typeof text)

// const d = new Date();
// let text = d.toUTCString();
// console.log(text,typeof text)

// const d = new Date();
// let ms = d.valueOf();
// console.log(ms)


// --random otp-->
// function  generate_otp(digit){
//     let otp =""
//     for(let i=0; i<digit; i++){
//         otp = otp+Math.floor(Math.random()*10+1)
      
//     }
//     return `otp is ${otp}`
// }
// // console.log(generate_otp(3))
// // console.log(generate_otp(6))



// // --random string-->
// function  ranndomString(digit){
// let string =""
// for(let i=0; i<digit; i++){
//     string = (Math.random()+1).toString(26).substring(7)
// }
// }
// console.log(ranndomString(5))

// const generateRandomString = function(length=6){
//     return Math.random().toString(20).substr(2, length)
//   }
//   console.log(generateRandomString())


// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// function generateString(length) {
//   let result = '';
//   const charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }
// console.log(generateString(5));


// function makeid(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       counter += 1;
//     }
//     return result;
// }

// console.log(makeid(5));


// function generatePassword(length) {
//     let password = "";
//     for (let i = 0; i < length; i++) {
//       password += String.fromCharCode(Math.floor(Math.random() * 62) % 26 + 97); // lowercase letters
//     }
//     return password;
//   }
  
//   console.log(generatePassword(8));


// function generatePassword(length) {
//     let password = "";
//     for (let i = 0; i < length; i++) {
//       if (Math.random() < 0.33) {
//         password += String.fromCharCode(Math.floor(Math.random() * 26) + 65); // uppercase letters
//       } else if (Math.random() < 0.66) {
//         password += String.fromCharCode(Math.floor(Math.random() * 10) + 48); // numbers
//       } else {
//         password += String.fromCharCode(Math.floor(Math.random() * 26) + 97); // lowercase letters
//       }
//     }
//     return password;
//   }
  
//   console.log(generatePassword(8));


// ---randomcolor-->
function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
  console.log(getRandomColor())


  function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var a = Math.random().toFixed(2);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }
  console.log(getRandomColor())

  function getRandomColor() {
    var h = Math.floor(Math.random() * 361);
    var s = Math.random();
    var l = Math.random();
    return 'hsl(' + h + ',' + s + ',' + l + ')';
  }
  console.log(getRandomColor())

  function getRandomColor() {
    var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  console.log(getRandomColor())

