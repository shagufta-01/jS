function binarySearch(arr,key){
    let s =0; 
    let e=arr.length-1;
    
    while(s<=e){
        let mid =Math.floor((s+e)/2)
        let guessVal = arr[mid];
        if(guessVal ===key){
            return mid
        }
        if(guessVal >key){
            e = mid-1
        }
        else{
            s = mid+1
        }
        return -1
    }
}
const arr = [1, 3, 5, 7, 8, 9];
const target = 5;

const result = binarySearch(arr, target);
console.log(result)