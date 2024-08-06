function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let minInd = i;
        for(let j=i-1; j<arr.length; j++ ){
            if(arr[j]>arr[minInd]){
                minInd = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minInd];
        arr[minInd] = temp
    }return arr
}
console.log(selectionSort([23,212,7,32,1,9]))