let str="gfhjkkjdgf"
let obj = {}
for(let i=0; i<str.length-1; i++){
    if(obj[str[i]]){
        obj[str[i]]++;
    }else{
        obj[str[i]]=1
    }
}
console.log(obj)