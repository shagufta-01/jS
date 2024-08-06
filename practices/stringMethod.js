// 1. Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

// function is_string(str){
//     if(typeof str==='string'|| str instanceof String){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(is_string('w3resource'));
// console.log(is_string([1, 2, 4, 0]));

// 2. Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

// function is_Blank(str){
//     if(str===""){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(is_Blank('abc'));
// console.log(is_Blank(''));

// 3. Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]
// function string_to_array(str){
//     return  str.split(" -- ")
// }
// console.log(string_to_array("Robin Singh"));
// 4. Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"
// function truncate_string(str,p){
//     return str.slice(0,p)
// }
// console.log(truncate_string("Robin Singhhhhh",4));

// 5. Write a JavaScript function to convert a string into abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."
// function truncate_string(str,p){
//     return str.slice(0,p)
// }
// console.log(truncate_string(("Robin Singh",5)))
// 8. Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"
// function capitalize(str){
// return str.charAt(0).toUpperCase()+str.slice(1)
// }

// // console.log(capitalize('js string exercises'));
// function smalize(str){
//     return str.charAt(0).toLowerCase()+str.slice(1)
// }
// // console.log(smalize("KKKfsanf"))

// function charr(str){
//     return str.charAt(4).toLowerCase() +str.slice(1)

// }
// console.log(charr("hgjkl"))


// 10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"

// function swapcase(str){
   

// }
// console.log(swapcase('AaBbc'));

// const a ={
//     dev:"BFE.dev",
//     update:name=>{
//         this.dev=name
//     }
// }
// a.update('bigfrontend.dev')
// console.log(a.dev)
// const a = [1,2,3]
// const d = a.push(4)
// const c = d.push(5)
// console.log(c)

// var obj = { "name":"John", "age":"39", "city":"New York"};
// let text = JSON.stringify(obj,function(k,val){
//     if(k=="age"){
//         return val.replace()

//     }
//     else{
//         return val
//     }
// })
// console.log(text)


// let objs ={"fname":"shagufta","lname":"fatima","age":21,"course":"B.tech"}
// let data =JSON.stringify(objs,function(k,val){
//     function func(){
//         if(k=="city"){
//             return val.repeat(3)
//         }else{
//             return val
//         }
//     }

// })

// console.log(data)

// function swapcase(str){
//     return str.replace(/([a-z]+)|([A-Z]+)/g,function(match,chr){
//         return chr ? match.toUpperCase():match.toLowerCase()
//     })
// }
// console.log(swapcase('AaBbc'));
// console.log(swapcase('shgaufta'))
// function swaap(str){
// return str.replace(/([a-z]+)|([A-Z]+)/g, function(matchh,chr){
// return chr ? matchh.toUpperCase():matchh.toLowerCase()
// })
// }
// console.log(swaap("dfdghjkvbnm"))

// 11. Write a JavaScript function to convert a string into camel case.
// Test Data :
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"

// function camelize(str){
    // return str.replace(/\W+(.)/g,function(match,chr){
        // return chr.toUpperCase()
    // })
// }

// console.log(camelize("JavaScriptExercises"));
// console.log(camelize("JavaScript exercises"));

// function capitalize_Words(str){
// return str.replace(/\w\S*/g,function(chr){
// return chr.charAt(0).toUpperCase() +chr.substr(1).toLowerCase()
// })
// }
// console.log(capitalize_Words('js string exercises'));


// function arrSplice(str,a,b){
//     return str.splice(a,b)
// }
// console.log(arrSplice(["a","b","c","d"],1,3,"er","fdf","gf"))

// 1. Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

// function reversestr(n){
// let rev =''
// while(n>0){
//     rev = rev + n % 10;
//     n = Math.floor(n/10)
    
// }return rev
// }


// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// function palindromeh(n){//1221
//     let rev=0
//     while(n>0){
//         rev = rev*10 + n % 10;
//         n = Math.floor(n/10)
   
//     }
//     console.log(rev,typeof rev)
//     if(a==rev){
//         return true
//     }
//     else{
//         return false
//     }
 

// }

// console.log(palindromeh(1242542))
// var a = 1221
// console.log(palindromeh(a))


// function is_string(str){
//     if(str==='string'){
//         return false
//     }
//     else{
//         return false
//     }
    
// }
// console.log(is_string([1, 2, 4, 0]));
// console.log(is_string('w3resource'));

// function multiply(n,len){
//    let a= n.slice(len)
//    return a*n
// }
// console.log(multiply(7,5))

function  fibSeries(n){
    let a=0;
    let b=1;
    let result=[]
    for(let i=1; i<n; i++){
        let c = a+b
        result.push(c)
        a=b
        b=c
    }
    return result

}
console.log(fibSeries(12))


function fab(n){
    let fibArr =[0,1]
    for(let i=2; i<=n; i++){

    }
}

// function camelize(str){
//     return str.replace(/\w+(.)/g,function(match,chr){
//         return chr.toUpperCases()
//     })
// }
// console.log(camelize("JavaScript exercises"));




function fibbonaci(n){
    let fibArr=[0,1];
    for(let i=2; i<=n;i++ ){
        let x = fibArr[i-1]+fibArr[i-2];
        fibArr.push(x)
    }
    return fibArr
}
console.log(fibbonaci(10))


function fibSeries(n){
    let a=0;
    let b=1
    let result = [];
    for(let i=1; i<=n; i++){
let c = a+b
result.push(c);
a=b;
b=c

}
return result;
}
console.log(fibSeries(10))



function findVowel(str){
    // let arr=[]
    let count=0
    if(str=='a' ||str=='e'|| str=='i'||str=='o'||str=='u'){

count++
    }}
  
console.log(findVowel("JavaScript function"))


function findVowel(str){
    // let count=0
let newarr=[]
    let vowels=['a','e','i','o','u'];
    for(let i of str){
        if(vowels.includes(i))
newarr.push(i)
            // count++
    }
    
return newarr
}
console.log(findVowel("shagufta"))

function findVowels(str){
       return `str.toLowerCase().match(/[aeiou]/g).length

}
console.log(findVowels("shaguftaaa"))

// "aAbBC"
function multiply(n,len){
    let arr=[]
    for(let i=1; i<len+1; i++){
        arr.push(i*n);
    }
    return arr
}
console.log(multiply(7,5))
console.log(multiply(12,10))


function prime(n){
    if(n===1) return 1

    for(let i=2; i<n; i++){
        if(n%i==0){
            return 0
        }
        return 1
}}
}
console.log(prime(3))
console.log(prime(23))
console.log(prime(40))
console.log(prime(1))
