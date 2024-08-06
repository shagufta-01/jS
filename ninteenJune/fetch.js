async function garbagee(){
    try{
            const result = await fetch("https://jsonplaceholder.typicode.com/posts")
            // console.log(result)
            let data = await result.json() 
            let Title = data.filter((value)=>
                console.log(value.title.length<50));
            // console.log(data.title)
        //     data.map((a,b)=>{
        //         console.log(a,b)
        //    if(a.id < b.id){
        //     return 1
        //    }
        //    else if(a.id >b.id){
        //     return -1
        //    }
        //    else{
        //     return 0
        //    }
        //     })
      

    }
    catch(error){
console.log(error)
    }
}
garbagee()