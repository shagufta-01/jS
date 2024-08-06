// let squr ={
// side:5,
// get area(){
// //    return this.side*this.side
// return this.side**2
// }
// }
// console.log(squr.area)
// squr.side=20;
// console.log(squr.area)

// -------->que#02
// function strCon(seperator, ...strings){
//     let resultVal=" "
//     strings.forEach((string, i)=>{
// console.log(string);
//         console.log(i,"i")
//         if(i===strings.length-1){
//             console.log(i,"i")
//             resultVal += string
//         }else{
//             resultVal += string + seperator
//         }
//     })
//     return resultVal
// }
// console.log(strCon("+","this","is","me"))

// let arr=[1,2,3,4,5,6,7,8,9]
// let [a,b,c,...d] =arr
// console.log(a,b,c,d)
// let ar = [[1,23],[43,4]]
// let [[a,b],[c,d]]=ar
// console.log(a,b,c,d)
const obj={
    a:1,
    b:2,
    c:3,
    d:4
}
let {a,b,c,d}=obj
console.log(a,b,c,d)