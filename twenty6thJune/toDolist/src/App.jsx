import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Btn from './Components/Btn'

function App() {
const [count, setCount] = useState(0);

  return (
<div>
  <h1>props..</h1>
<p >Count is: {count}</p>
<button onClick={()=>setCount(count+1)}>Click me</button>
{/* <btn incre={incre}/> */}
<Btn count={count}/>
</div>
  )
}

export default App
// 1st
//  <div>
// <input type="text" name="" id="" onChange={(e)=>{
//   setName(e.target.value)
// }} />

// {
//   name==="go" ?(

// <Btn fullName="go"/>
//   ):(

// <Btn fullName="submit"/>
//   )
// }
// <Btn fullName="refresh"/>
// <Btn fullName={name}/>
// {/* {name} */}
//  </div>

// ----2nd
{/* <>
<p>You Clicked {count} times</p>

<button onClick={()=> setCount(count+1)}>Click me</button>
</> */}

//3rd
{/* <Btn name="shagufta" course="b.tech"/> */}
{/* <Btn name="Fatima" /> */}
{/* <Btn name="Aakash" course="b.Pharm" /> */}
{/* <Btn name="Ayoob"/> */}