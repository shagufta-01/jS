import React, { useState } from 'react'

function TodoApp(props) {
    const [inputText,setInputText] = useState("")
  return (
    <div>
     <div className="input-container">
        <input type="text" className='input-box-todo' placeholder='Enter here To DO' onChange={e =>{
            setInputText(e.target.value)
        }}/>
        <button className="add-btn" 
onClick={()=>{
    value={inputText}
    props.addList(inputText);
    setInputText("")
}}
        >+</button>
  
     </div>
    </div>
  )
}

export default TodoApp
