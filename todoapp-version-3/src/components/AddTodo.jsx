import { useState } from "react";
import { IoAdd } from "react-icons/io5";


function AddTodo({onNewItem}) {
  let [todoName,setTodoName]=useState("")
  let [dueDate,setDueDate]=useState("")

  function handleNameChange(event){
   let name=event.target.value;
   setTodoName(name)
  } 

  function handleDateChange(event){
   let date=event.target.value;
   setDueDate(date)
  } 
   function handleAddButtonClicked(event){
    event.preventDefault();
  
    // console.log("hello")
     onNewItem(todoName,dueDate);
     setTodoName("");
     setDueDate("")
   }
  return ( 
    <div className="container text-center">
      <form className="row kg-row"   onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={todoName}  onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date"  onChange={handleDateChange} value={dueDate} placeholder="date" />
        </div>
        <div className="col-2">
          {/* by default button type is submit  if we mention or not mention */}
          <button type="submit" className="btn btn-success kg-button" >
          <IoAdd />


          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;