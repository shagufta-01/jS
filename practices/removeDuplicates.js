function removeDuplicates(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result ^= arr[i];
    }
    return result;
  }
// let arr =[12,34,21,13,6,6,9,3,21]
// console.log(removeDuplicates([12,34,12]))

//m-2

function removeArr(arr){
    const uni = new Set(arr)
    return Array.from(uni)
}
// console.log(removeArr( [12, 34, 21, 13, 6, 9, 3]))



function removeDup(arr){
    let uniArr=[]
    for(let i=0;i<arr.length; i++){
        if(uniArr.indexOf(arr[i])===-1){
            uniArr.push(arr[i])
        }
    }return uniArr
}
// console.log(removeArr( [12,34,21,13,6,6,9,3,21]))



//set
function remoDup(arr){
    return [...new Set(arr)]
}
console.log(removeArr( [12,34,21,13,6,6,9,3,21]))


 //forEach//
function remove(arr){
    let res=[]
    arr.forEach((itm)=>{
        if (res.indexOf(itm)===-1){
            res.push(itm)
        }
    });return res
}
console.log(remove([1,2,2,4,1,-1,0,-1]))

//filter
function removeeee(arr){
    return arr.filter((itm,ind)=>{
        return arr.indexOf(itm)===ind
    })
}
console.log(remove([1,2,2,4,1,-1,0,-1]))
//mapp//

function  remm(arr){
    return arr.map((itm,ind)=>{
        return arr.indexOf(itm)===ind
    })
}
console.log(remove([1,2,2,4,1,-1,0,-1]))

//reduce//
function reducerem(arr){
    return arr.reduce((acc,current)=>{
     if(!acc.includes(current)){
        acc.push(current)
     }
     return acc
    },[])
}
console.log(reducerem([1,2,2,4,1,-1,0,-1]))