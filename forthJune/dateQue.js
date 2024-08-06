//1 function datee(input){
//    return typeof input==='object' && input instanceof Date && !isNaN(input.getTime())
// }
// console.log(datee("October 13, 2014 11:13:00"))
// console.log(datee(new Date(86400000)))
// console.log(datee([1, 2, 4, 0]))
// console.log(datee(new Date(99,5,24,11,33,30,0)));



// function  isDate(input){
// if(Object.prototype.toString.call(input)==='[object Date') return true
// return false
// }
// console.log(isDate("October 13, 2014 11:13:00"))
// console.log(isDate(new Date(86400000)))
// console.log(isDate([1, 2, 4, 0]))


// function curday(input){
// let currdd = new Date();
// let year = currdd.getFullYear();
// let month = currdd.getMonth()+1
// let day = currdd.getDate();
// return `${year}-${month.toString().padStart(2,'0')}-${day.toString().padStart(2,'0')}`
// }
// console.log(curday('-'))
// console.log(curday('/'))

// function getCurrent(){
//     let currentDate = new Date();
//     let y = currentDate.getFullYear();
//     let m = currentDate.getMonth()+1
//     let d =currentDate.getDay();
//     let h = currentDate.getHours()
//     let min =currentDate.getMinutes();
//     let sec = currentDate.getSeconds();
//     // return `${y}-${m.toString().padStart(2,'0')}-${d.toString().padStart(2,'0')}:${h}-${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`}
//     return (y+m+d+h+min+sec)
// }
//     console.log(getCurrent("/"))
//     console.log(getCurrent("-"))

// 2.function curday(sp){
//     today =new Date()
//     let dd = today.getDate()
//     let mm = today.getMonth()+1;
//     let yyyy=today.getFullYear()
// if(dd<10) dd ='0'+dd;
// if(mm<10) mm ='0'+mm;
// return (mm+sp+dd+sp+yyyy)
// }

// console.log(curday('-'));
// console.log(curday('/'));


// Write a JavaScript function to get the number of days in a month.
function getDateInMonth(){
    
}