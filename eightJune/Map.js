// let obj={
//     name:"Shagufta",
//     // 10:"is a nnumber in obj"
// }
// obj.city="Noida"
// let data = new Map([
//     ['name','Shagufta'],
//     [ 10,"is a nnumber in obj"],
//     [ true,"is a nnumber in obj"]
// ])
// data.set({},"this is an obj");
// data.set(()=>{}, "this is a arrow function type")
// data.set('city','Noida')//we can set our data
// data.set('city','Jaipur')//we can update data
// console.log(obj)S
// data.delete(true) //we can delete the data

// console.log(obj.name)
// console.log(obj.10)
// console.log(data.has(true))//check elements is present or not
// console.log(data, typeof data)
// console.log(data.has(true))
 //Map(4) {
//     'name' => 'Shagufta',
//     10 => 'is a nnumber in obj',
//     true => 'is a nnumber in obj',
//     'city' => 'Noida'
//   }
// console.log(data.get('name'))//Shagufta
// console.log(data.get(10)) //is a nnumber in obj'
// console.log(data.get(true))//is a nnumber in obj
// console.log(data.size)//we can get the size
// console.log(data.values())//recivees all values
// console.log(data.keys())//recives all keys{name,10,city,true}
// data.forEach((firstvalue,secondKey)=>{
// console.warn(secondKey,firstvalue)
// })
// for([k,v] of data){
//     // console.warn(x[1],x[0])
//     console.warn(k,v)
// }

// const map = new Map([
//     ["fname", "shgufta"],
//     ["lname","fatima"],
//     ["subject","B.tech"],
//     [true,"yes this is true"],
//     [22,"is my age"],
// ])

// map.delete(true)
// console.log(map.get('fname'))
// console.log(map.get('lname'))
// console.log(map.get('true'))
// console.log(map.get(true))
// console.log(map.get(22))
// console.log(map.has(true))
// map.clear()
// console.log(map.entries())
// console.log(map.values())
// console.log(map.keys())
// console.log(map.size)
// console.log(map)
// map.forEach((value,keys)=>{
//   console.log(value,keys)  
// })
// for(let [k,v] of map){
//     console.log(k,v)
// }
// const obj={
//     fname:"shagufta",
//     lname:"fatima",
//     age:22,
//     branch:"B.tech",
//     true:"yes"
// }
// let obj1 = Object.freeze(obj) //This means that once an object is frozen, its properties cannot be added, modified, or removed
// console.log(obj1)
// obj.mur="2101685"
// console.log(obj,typeof obj)
// let obj1 = Object.seal(obj);
// The Object.seal() method in JavaScript is used to seal an object. Sealing an object prevents new properties from being added to it, but allows existing properties to be changed. It marks all existing properties as non-configurable, meaning they cannot be deleted or their configurable attributes cannot be changed.
// obj1.branch="ece"

// obj.address="newYork"
// console.log(obj1,typeof obj1 )