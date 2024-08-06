
// function getData(dataId){
//     setTimeout(()=>{
//         console.log("data",dataId)
//     },2000)
// }
// getData(2)
// getData(4)
// getData(6)


// <------- above all data execute after completing 2s but i want each call back take 2s each 


// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId)
//         if(getNextData){
//             getNextData()
//         }
//     },2000)
// }

// getData(1,()=>{
//     getData(2)
// })



//-------->best ways--->each fun take 2 sec

function getDataa(data,getNextData){
    setTimeout(()=>{
console.log(data,"data");
if(getNextData){
    getNextData()
}
    },1000)
}
 

// <-----call Back hell--->
getDataa(1,()=>{
    console.log("getting data2....")
    getDataa(2,()=>{
    console.log("getting data3....")
        getDataa(3,()=>{
    console.log("getting data4....")
            getDataa(4,()=>{
    console.log("getting data5....")
                getDataa(5,()=>{
    console.log("getting data6....")
                    getDataa(6,()=>{
    console.log("getting data7....")
                    getDataa(7)
                    })
                })
             })
        })
    })
})
