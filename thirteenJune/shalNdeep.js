// Shallow copy: Use when you only need a copy of the top-level properties and do not need to modify the inner objects.
// let obj ={
//     name:"Shagufta",
//     age:22,
//     details:{
//         adress:"29,street"
//     },
//     getNmae(){
//         fname:"Hello"
//     }
//     }

    let xc = ()=>{
        let a = 10
        return ()=>{
            let b = a+10
            return ()=>{
                console.log(b);
            }
        }
    }
   xc()()()



   let cc = ()=>{
    let a = 10
    xy= ()=>{
        let b = a+10
        yz = ()=>{
            console.log(b);
        }
        yz()
    }
    xy()
}
cc()
    // shallow:reference will be assing
    // let obj1 =obj;

// let obj1={...obj}
//  let obj1 =JSON.parse(JSON.stringify(obj))


// obj1.details.adress = 'civil lines'

    // obj1.name="fatima"
    // console.log(obj,"obj is 1")

    // console.log(obj1,"obj1 is 2")

// deep Copy:
// Deep copy: Use when you need to create an independent copy of the object and its inner objects, and you need to modify the inner objects.
let obj ={
    name:"Shagufta",
    age:22
    }
// 1.
 let obj1 =Object.assign({},obj)
// 2. 
// let obj1 ={...obj}
//3. let obj1 = JSON.parse(JSON.stringify(obj))

obj1.name="fatima"
obj1.age =20
console.log(obj1,"obj2 is 2")
console.log(obj,"obj is 1")