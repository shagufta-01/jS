
// let a =Hello World   // olleH dlroW

// function reverse(str){
//     let rev =str.split("")
//     console.log(rev)
// let res = rev.reverse()
//       console.log(res)
//       let result= res.join(" ")
//       console.log(result)
//      let LOw =result.split("  ")
// console.log(LOw)

// }
// console.log(reverse("Hello World"))

function rev(str){
    return str.split("").reverse().join(" ")

}
console.log(rev("Hello World"))
// olleH dlroW

// let word = "Hello World"
// let splited_word = word.split(" ")
// let reverse = splited_word[0].split('').reverse().join("") + " " + splited_word[1].split('').reverse().join("")

// console.log(reverse);

let word = "Hello World Iam here";
let splited_word = word.split(" ");
let result = "";

for (let i = 0; i < splited_word.length; i++) {
  let reversed_word = splited_word[i].split('').reverse().join("");
  result += reversed_word + " ";
}

console.log(result);