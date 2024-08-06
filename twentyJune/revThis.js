const person={
    fname:"shagufta",
    lname:"fatima",
    id:3241,
    fullName(){
        return this.fname+" "+this.lname
    }
}
console.log(person.fullName())