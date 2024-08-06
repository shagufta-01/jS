function reverse(str){
    let reversed ="";
    for(let i= str.length-1; i>=0; i--){
        reversed +=str[i]
    }
    return reversed
}
console.log(reverse("shagufta"))

function reverse(str){
    return str.split("").reduce((acc, cur)=>cur +acc,"")
}
console.log(reverse("shaguftaa"))


function reverseStr(str){
    return str.split("").reduce((acc, cur)=>cur + acc,"")
}
console.log(reverseStr("shagufta"))


function reverseString(str) {
    let left = 0;
    let right = str.length - 1;
    let reversed = "";
    while (left < right) {
        reversed += str[right--];
        reversed += str[left++];
    }
    return reversed;
}

console.log(reverseString("shagufta"))