import React, { useState } from "react";
import Task from "../Task/Task";


import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const[value,setValue] = useState("")
  const[todos,setTodo]=useState([])

  const onDelete=(id)=>{
    let newTodo=todos.filter(todo=>todo.id!==id)
    setTodo(newTodo)
  }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task..." className={styles.add}
      value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button data-cy="add-task-button" onClick={()=>{
       setTodo([...todos , {id:Date.now() , value:value}])
       setValue("")
      }}>Add</button>

      {
        todos.map((todo)=>(
      <Task todo={todo} key={todo.id} onDelete={onDelete}/>
        ))
      }
      
    </div>
  );
};

export default AddTask;
