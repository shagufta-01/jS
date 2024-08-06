xc=()=>{
    let a =10
    return ()=>{
        let b =23
        console.log(a,"a ","b",b)
        return ()=>{
            let c= a+b
            console.log(c)
        }
    
    }
}
xc()()()//curring

(()=>{
    var count =0;
    let xc=()=>{
        count++
        console.log(count)
        let xcc=()=>{
            count--;
            console.log(count)
            let xccc=()=>{
                count++
                console.log(count)
            };xccc()
        };xcc()
   console.log(count) };xc()
})();



cc =()=>{
    let a=32
    let xx =()=>{
        let b=23
        let yy=()=>{
            let c =a+b
            console.log(c)
        };yy()
    };xx()

}
cc()