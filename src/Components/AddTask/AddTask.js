import React,{useContext} from 'react';
import DataContext from '../../data/DataContext';

const AddTask = () => {

  const  {taskItemsList,handleDeleteTask,handleCompleteTask,handleEditTask,searchValue} = useContext(DataContext);
  return (
    <section>        
          <ul style={{listStyleType: "decimal"}}>
          {taskItemsList.map((task)=>{
                return <div key ={task.id} style ={{color:task.completed ? "white" : null, background:task.completed ? "green" : null,
                textDecoration:task.completed ? "line-through":"none",padding:"10px",margin:"4px"}}>
                  <li>
                    <h3>{task.title} </h3>
                    <p>{task.description}</p>
                    <div style={{marginTop:"10px"}}>
                      <button onClick ={()=>{handleDeleteTask(task.id)}}>Delete</button>
                      <button onClick={()=>{handleEditTask(task.id)}}>Edit</button>
                      <button onClick={()=>{handleCompleteTask(task.id)}}>Complete</button>
                    </div>
                  </li>
               </div>
          })}
      </ul>
    </section>
  )
}

export default AddTask;