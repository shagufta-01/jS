// function is_string(str){
//     if(typeof str==='string'){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(is_string('w3resource'));
// console.log(is_string([1, 2, 4, 0]));
// function is_Blank(str){
//     if(str==""){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));

// function string_to_array(str){
//     return str.split(" ")
// }
// console.log(string_to_array("Robin Singh"));
// function truncate_string(str,len){
    // return str.slice(0,len)
    // return str.substring(0,len)
//     return str.substr(0,len)
// }
// console.log(truncate_string("Robin Singh",4));

// function abbrev_name(str,len){
// let words = str.split(" ")
// let abbrevation ="";
// for(let i=0; i<words.length; i++){
//     if(i>0){
//         abbrevation = abbrevation +". ";
// //     }
//     if(words[i].length >4){
//         abbrevation = abbrevation +words[i].substr(0,1) + '.'
//     }else{
//         abbrevation = abbrevation +words[i]
//     }
// }return abbrevation
// }
// console.log(abbrev_name("Robin Singh"));
// console.log(abbrev_name("Ali Saleh"))

// function abbra(str){
//     let splitname = str.trim().split(" ")
//     if(splitname.length >1){
//         return (splitname[0] + " " +splitname[1].charAt(0) + ".");

//     }return splitname[0]
// }
// console.log(abbra("Robin Singh"));
// console.log(abbra("Ali Saleh"))
// function abbbravate(str){
    // let spliename=str.split(" ")
    // if(spliename.length >1){
    // return (spliename[0]+" "+spliename[1].charAt(0)+".");
    // console.log(spliename)
// }return spliename[0]}
// console.log(abbbravate("shagufta fatima"))

// function prevent(email) {
//     let input = email.split("@")
//     console.log(input); // log the input and the result
//     // console.log(res)
//     return input[0].slice(0,3)+'XXX@'+input[1]
//   }
//   console.log(prevent("shaguftaFatima@gmil.com"));
//   console.log(prevent("hsgufta534535240@gmial.com"))
// function stringg(str){
//     let a = str.replace(/\s+/g,"-")
//     // return str.replace(/\s+/g,"-")
//     return a.toLowerCase()
  
//   }
//   console.log(stringg("Shagufta fatiam"))


// function preventEmail(input){
//     let a = input.split("@")
//     console.log(a)
//     if(input.length>1){
//     return a[0].slice(0,4)+"XXXS@"+a[1]+"."}
//     else{
//         return a[0]
//     }
// }
// console.log(preventEmail("shaguftaftaima@gmail.com"))

// function string_parameterize(str){
// let a =  str.replace(/\s+/g, "-")
// // return  str.replace(/\s+/g, "-")
// return a.toLowerCase()
// }
// console.log(string_parameterize("Robin Singh from USA."));

// function capitalize(str){
//     return str.charAt(0).toUpperCase()+str.slice(1)
// }
// console.log(capitalize('js string exercises'));
// function capitalize_Words(str){
//     return str.replace(/\w\S*/g, function(chr){
//         return chr.charAt(0).toUpperCase()+chr.substr(1).toLowerCase()
//     })
// }
// console.log(capitalize_Words('js string exercises'));
// function swapcase(str){
//     return str.replace(/([a-z]+)|([A-Z]+)/g,function(matchh,chr){
//         return chr?matchh.toUpperCase():matchh.toLowerCase()
//     })
// }
// console.log(swapcase('AaBbc'));

// function camelize(str){
//     return str.replace(/\W+(.)/g, function(match, chr) {
//         return chr.toUpperCase();
// })
// }
// console.log(camelize("JavaScript exercises"));

// function uncamelize(str,space){
//     return str.replace(/_/g,"")
// }
// console.log(uncamelize("Hello_world"))

// 13. Write a JavaScript function to concatenate a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));

// function repeat(str,len){
//     return str.repeat(len)
// }

// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));

// 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// function insert(str,inserrt,pos){
//     return str.slice(0,pos-1)+inserrt +str.slice(pos)
// }
// console.log(insert('We are doing some exercises.','JavaScript ',18));

// 15.Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.
// function humanize_format(i){
//    let j=i%10,
//    k = i%100;
//    if(j===1 && k!==11){
//     return i+"st"
//    }
//    if(j===2 && k!==12){
//     return i+"nd"
//    }
//    if(j===3 && k!==13){
//     return i +"rd"
//    }
//    return i+"th"
   
// }
// console.log(humanize_format(30))

// 16. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.
// Test Data :
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"

// function text_truncate(str,len,insert=""){
// return str.slice(0,len)+insert
// }
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))


// 17. Write a JavaScript function to chop a string into chunks of a given length.
// Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

function string_chop(str,start,end){
    return str.slice(start,end)
}



  

// function string_chop(str,size){
//     if(str===null) return [];
//     str = string(str)
//     size = ~~size;
//     return size > 0?str.match(new RegExp('.{' + size +'}','g')):[str]
// }
// console.log

// 18. Write a JavaScript function to count substrings in a string.
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1


// 19. Write a JavaScript function that takes a positive integer and reverses the binary representation of that integer. Finally return the decimal version of the binary string.
// Test Data :
// (100) -> 19
// Explanation:
// Binary representation of 100 is 1100100
// Reverse of 1100100 is 10011
// Decimal form of 10011 is 19
// (1134) -> 945
// Explanation:
// Binary representation of 1134 is 10001101110
// Reverse of 10001101110 is 1110110001
// Decimal form of 1110110001 is 945


// 20. Write a JavaScript function that can pad (left, right) a string to get to a specific length.
// Test Data :
// console.log(formatted_string('0000',123,'l'));
// console.log(formatted_string('00000000',123,''));
// Output :
// "0123"
// "12300000"


// 21. Write a JavaScript function to repeat a string for a specified time.
// Test Data :
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// Output :
// "aaaa"
// "Error in string or count."
// function repeat_string(str,count){
//     if((str==null)||(count<0)||(count==Infinity) ||(count ==null))
//         return "Error in string or count."
    
//     return str.repeat(count)
// }
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));