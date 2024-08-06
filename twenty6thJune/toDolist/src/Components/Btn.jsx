import React from 'react'

function Btn({count}) {
  return (
    <div>
     <p>the current count is:{count}</p> 
  {/* {console.log(props)} */}
  {/* <button onClick={props.incre}>Click me</button>
  <button onClick={props.decre}>Click me</button> */}
    </div>
  )
}

export default Btn

// 3rd
{/*    {props.child}
      <button><h1>Hello </h1>{props.course} {props.name}</button>*/}