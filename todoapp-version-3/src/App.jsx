import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems"; 

import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() { 
  const initialtodoItems = [
    // {
    //   name: "Buy Milk",
    //   dueDate: "4/10/2023",
    // },
    // {
    //   name: "Go to College",
    //   dueDate: "4/10/2023",
    // },
    // {
    //   name: "Like this v{ideo",
    //   dueDate: "right now",
    // },
   
  ]; 
  let[todoItems,SetTodoItem]=useState(initialtodoItems)
    function handleNewItem(todoName,todoDate){
      const newTodoItems=[
        {
        name: todoName,
      dueDate: todoDate,
      },
      ...todoItems
    ]
     SetTodoItem(newTodoItems)
    }  
    function   DeleteItem(todoname){
     //here logic is all item should remain except which matches with param
   let newitems=todoItems.filter((item)=>item.name!==todoname)
   SetTodoItem(newitems)

    }
  return (
    <center className="todo-container">
      <AppName />
      {todoItems.length == 0 && <WelcomeMessage/>}
      <AddTodo onNewItem={handleNewItem} />
     <TodoItems todoItems={todoItems} deleteItem={DeleteItem}/>

    </center>
  );
}

export default App;