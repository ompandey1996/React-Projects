import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems"; 
import "./App.css";
// import { useState } from "react";

function App() { 
  
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];
  

  
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
     <TodoItems todoItems={todoItems}/>

    </center>
  );
}

export default App;