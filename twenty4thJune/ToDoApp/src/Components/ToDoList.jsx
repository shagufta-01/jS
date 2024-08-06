import React from 'react'

function ToDoList(props) {
  return (
    <div>
      <li className='listItem'>
        {props.item}
      <span className='icon'>
<i class="fa-solid fa-trash-can"></i>
      </span></li>
    </div>
  )
}

export default ToDoList
