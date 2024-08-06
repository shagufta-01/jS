arr=[1,2,4,5]
// const arr1 = arr.at(0)
// const arr1 = arr.slice(0,1)
function firstele(arr){
  return  arr.splice(0,1)
}

// console.log(firstele(arr))

for(let i=0;i<1;i++){
    // console.log(arr[0],arr[1])
    console.log(arr[i]);
}

// let arr1=arr.slice(0,1)
// console.log(arr1);

function matchHouses(step){
    if(step===0){
        return 0;
    }
    else{
        return (step*6)-(step-1)
    }

}
console.log(matchHouses(43))