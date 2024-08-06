//------- 1. Write a JavaScript function to check whether an 'input' is a string or not.
// function checkStr(input){
//     if(typeof input==='string') return true
//     else return false
// }
// console.log(checkStr("string"))
// console.log(checkStr[1,2])
// console.log(checkStr(1327))

//------- 2. Write a JavaScript function to check whether a string is blank or not.

// function isBlank(str){
//     if(str==='' || str===" "){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isBlank(" "))
// console.log(isBlank("fdghjk"))
// console.log(isBlank(12314))
// -----------3. Write a JavaScript function to split a string and convert it into an array of words
// function strin_arr(str){
//     return str.split(" ")
// }
// console.log("Robin Singh")
// -----------4.Write a JavaScript function to extract a specified number of characters from a string.
// function extract(str,n){
    // return str.slice(0,n)
    // return str.length
//     return str.charAt(n)
// }
// console.log(extract("shagufta", 5))
// console.log(extract("shagufta",5))

// -----------5 Write a JavaScript function to convert a string into abbreviated form.

// function abbrev_name(str){
// let spl = str.split(" ")
// return spl[0]+" "+spl[1].slice(0,1).toUpperCase()+".";
// }
// console.log(abbrev_name("shagufta fatima"))
// console.log(abbrev_name("string into abbreviated form "))


// -----------6. Write a JavaScript function that hides email addresses to prevent unauthorized access
// function emailPre(email){
// let spl =email.split("@")
// return spl[0].slice(0,5)+"xxx@"+spl[1]
// }
// console.log(emailPre("shagutffatima@gmial.com"))
// console.log(emailPre("gfhjkla@gmial.com"))

//---------7. Write a JavaScript function to parameterize a string.

// function  parametrize(str){
// return str.toLowerCase().replace(/\s/g,"-")
// }
// console.log(parametrize("capitalize the first letter of a string"))


//------------8  Write a JavaScript function to capitalize the first letter of a string.
// function firstCh(str){
// return str.charAt(0).toUpperCase()+str.slice(1)
// }
// console.log(firstCh("js string exercises"))


//------------9 Write a JavaScript function to capitalize the first letter of each
// function capitalize(str){
//     return str.replace(/\w\S*/g, (x)=>{
//         console.log(x,"ccc")
//    return  x[0].toUpperCase()+x.substr(1).toLowerCase()
    
//     })
// }
// console.log(capitalize("js string exercises"))

//------------10.Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case
function paraMeter(str){
return str.replace(/([a-z]+) |([A-Z]+)/g,()=>{
    
})
}

console.log(paraMeter("ShAgUfTA"))

// natlify and firebase