function person(fname, lname, age){
    this.fname=fname
    this.lname = lname
    this.age = age
    // person.prototpe.nationality = "English";
}
const myFather =new person("John", "Doe", 50, "blue")
const myMother = new person("Sally", "Rally", 48, "green")

// console.log(myFather)
// console.log(myMother )

const car = {
    type:"Fiat",
    model:"500",
    color:"white",
    fullName:function(){

return this.type+" "+this.model
    }
}
// const person = new car()
car.price="50K";
console.log(car.type)
console.log(car, typeof car)
const  Person = new Object();
Person.fname="shagufta"
Person.lname = "fatima"
Person.age=22
const x = Person
x.age = 100
// console.log(Person,person.age,typeof Person)
// console.log(x,x.age,typeof Person)
// const per ={}
// per["age"]=21

// console.log(per)

