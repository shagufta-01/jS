import React, { useState } from 'react'

function TodoInput(props) {
    const [inputText, setInputText] = useState('')
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
<div className="input-conatiner">
<input type="text" className='input-box-todo' placeholder='Enter your todo' 
value={inputText}
onChange={e=>{
    setInputText(e.target.value)
}}
onKeyDown={handleEnterPress}
/>
<button className='add-btn' onChange={()=>{
    props.addList(inputText)
    setInputText("")
}}>+</button>

</div>

  )
}

export default TodoInput
