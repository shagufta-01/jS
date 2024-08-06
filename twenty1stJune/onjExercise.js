// que#01
// let product={
//     itemName:"books",
//     price:499,
//     discount:347,
//     itemCode:"CPU243"
// }
// console.log(product.discount())
// function product(){
//     return{
//         itemName:"books",
//         price:499,
//         discount:347,
//         itemCode:"CPU243" 
//     }
// }
// console.log(product())

function product(itemName,price,discouont, itemCode){
 
        this.itemName=itemName
        this.price=price
        this.discount=discouont
        this.itemCode=itemCode 
        this.disCountValue=function(){
            return price*discouont/100
        }
   
}
let Books = new product("Books",4849,80,"h34809")
let Fruits = new product("Apple",12000,10,"hApple809")
let Mobile= new product("oneplus", 12999,20, "ONEpLUS98")
console.log(Books)
console.log("discount is:"+Books.disCountValue())
console.log(Mobile)
console.log("discount is:"+Mobile.disCountValue())
console.log(Fruits)
console.log("discount is:"+Fruits.disCountValue())