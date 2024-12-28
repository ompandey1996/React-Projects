// import React from 'react'
import Styles from "./TodoItems.module.css"
import TodoItem from "./TodoItem"

function TodoItems({todoItems,deleteItem}) {
  return (
    <div className={Styles.itemscontainer}>
      {todoItems.map((item,index)=><TodoItem deleteItem={deleteItem} todoName={item.name} key={index} todoDate={item.dueDate}></TodoItem>)}
    
  </div>


  )
}

export default TodoItems