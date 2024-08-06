let btn = document.querySelector("button")
btn.addEventListener("click",()=>{
 alert("Hey!")
 let name =prompt("Enter nmae of student")
 btn.textContent = "Roll no. 1:"+ name
})