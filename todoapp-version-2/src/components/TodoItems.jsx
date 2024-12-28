// import React from 'react'
import Styles from "./TodoItems.module.css"
import TodoItem from "./TodoItem"

function TodoItems({todoItems}) {
  return (
    <div className={Styles.itemscontainer}>
      {todoItems.map((item)=><TodoItem todoName={item.name} todoDate={item.duedate}></TodoItem>)}
    
  </div>


  )
}

export default TodoItems