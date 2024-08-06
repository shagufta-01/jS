import React, { useState } from 'react'
import TodoApp from './Components/TodoApp'
import ToDoList from './Components/ToDoList'
function App() {
 
  const [lisTOdo, setListTodo] = useState("")
  let adddList =(inputText)=>{
setListTodo(...lisTOdo, inputText)
  }
  return (
    <div className='main-container'>
      <div className="center-contaiiner"></div>
   <TodoApp addList={adddList}/>
   <h1 className="app-heading">TODO</h1>
   <hr />
   {lisTOdo.map((listItem, i)=>{
return (
 <ToDoList key={i} item={listItem} />
)

   })}
   <ToDoList />
    </div>
  )
}

export default App
