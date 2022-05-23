import React, { useState } from "react";
import styles from "./task.module.css";

const Task = ({todo,onDelete}) => {
  // NOTE: do not delete `data-cy` key value pair
 const[isCompleted,setIsCompleted]=useState(todo.isCompleted)
 const[count,setCount]=useState(0)

 const increment=()=>{
   setCount(count+1)
 }

 const decrement=()=>{
   if(count>0){
  setCount(count-1)
   }
}
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" checked={isCompleted} onChange={(e)=>{
  setIsCompleted(e.target.checked)
}}/>
      <div data-cy="task-text" className={isCompleted ? styles.strike:""}>{todo.value}</div>
      <button data-cy="task-remove-button"  onClick={()=>
{onDelete(todo.id)}}>Delete </button>
      {/* Counter here */}
   
<button onClick={increment}>Inc</button>
<h1>{count}</h1>
<button onClick={decrement}>Dec</button>
 
    </li>
  );
};

export default Task;
