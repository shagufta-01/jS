// const course={
//     lecture:10,
//     section:3,
//     title:"js",
//     notes:{
//         introduction:"Welcome"
//     },
//     enroll(){
//         console.log("you are login")
//     }
// }
// course.enroll()
// console.log(course)
// course.price=1999
// console.log(course)



// ---hum aise use nhi kr sktee bcoz follow don't repeat yourself here we use course two times so  ...niche toh dekho>
// function createCourse(){
//     const course={
//         lecture:"10",
//         section:4,
//         title:"js",
//         notes:{
//            intr:"welcome to js course"
//         },
//         enroll(){
//             console.log("you are login")
//         }
//     }
//     return course
// }
// let course=new createCourse();
// console.log(course)
// ----->ye shi tariak hai..next step ab huma isko dynamic bana na hai so niche dekho
// function createCourse(){
//     return {
//         lecture:"10",
//         section:4,
//         title:"js",
//         notes:{
//            intr:"welcome to js course"
//         },
//         enroll(){
//             console.log("you are login")
//         }
//     }

// }
// let course=createCourse();
// console.log(course)

// ------>ye bhut easy way hai to define function 
// isko factory fucntion bhi bolte hai
// function createCourse(title){
//     return {
//      title:title,
//         enroll(){
//             console.log("you are login")
//         }
//     }

// }
// let course= createCourse("js");
// console.log(course)

// ---->ab baat krte hai constructor:constructor jo hai vo pascal naming convesion ko follow krta hai or isme hum new or this jkeyword ka use krte hai yhn pe humne resturn keyword use nhi kra hia bcoz new keyword automaticallly return kr deta hai..
// isko contreuctor fucntion bhi boltehai..
// function Course(title){
// this.title = title,
// this.enroll=function(){
//     console.log("you are successfully login")
// }
// }
// let course=new Course("js");
// console.log(course)
// delete course.title;
// console.log(course)
// console.log(course.enroll())


// ---->sare premitive data types are object let's prove intr
// function Course(title){
//     this.title = title,
//     this.enroll=function(){
//         console.log("you are successfully login")
//     }
//     }
//     let course=new Course("js");
//     console.log(course)
//     delete course.title;
//     console.log(course)
//     console.log(course.enroll())
    
//     console.log(course.constructor)




function createCourse(){
        return {
            lecture:"10",
            section:4,
            title:"js",
            notes:{
               intr:"welcome to js course"
            },
            enroll(){
                console.log("you are login")
            }
        }
    
    }
    let course=createCourse();
    // console.log(course)
// ------>for in  obj ke liys hai
    // for(let key in course){
    //     console.log(key,course[key])
    // }
    let course_1={}
    // ----->for of arr ke liya  hai
    for(let key of Object.keys(course)){
        // console.log(key, course[key])
        course_1[key] = course[key]//for copy 
    }
    console.log(course)
    console.log(course_1)