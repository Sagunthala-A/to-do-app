import React,{useContext} from 'react';
import DataContext from '../../data/DataContext';
import "./AddTask.css";
import {Delete,Edit,DoneOutline} from '@mui/icons-material';

const AddTask = () => {
  let date = new Date();
  const  {taskItemsList,handleDeleteTask,handleCompleteTask,handleEditTask,searchValue,isEdit,setIsEdit,isComplete,setIsComplete} = useContext(DataContext);
  return (
    <section> 
           <ul style={{listStyleType:"decimal"}} className='ulWrapper'>
          {taskItemsList.map((task)=>{
                return <div key ={task.id} style ={{}} className='listBox'>
                  <li className={task.completed ? 'lists completedLists' : 'lists'}>
                    <h3>{task.title} </h3>
                    <p>{task.description}</p>
                    <div style={{marginTop:"10px"}} className='taskBtns'>
                     
      {/* Use the disabled prop conditionally */}
                      <Delete
                        className={task.completed ? 'delIcon disabled' : 'delIcon'}
                        fontSize="medium"
                        onClick={() => {
                          if (!task.completed) {
                            handleDeleteTask(task.id);
                          }
                        }}
                      />
                      <Edit
                        className={task.completed ? 'editIcon disabled' : 'editIcon'}
                        fontSize="medium"
                        onClick={()=>{
                          handleEditTask(task.id)}
                        }
                      />
                      <DoneOutline
                        className={task.completed ? "completeIcon completedTask" : "completeIcon "}
                        fontSize={task.completed ? "large":"medium"}
                        onClick={()=>{
                          handleCompleteTask(task.id)}
                        }
                      />
                      {/* <button className='deleteBtn' onClick ={()=>{handleDeleteTask(task.id)}} disabled={task.completed}><Delete fontSize="small"/></button>
                      <button className='editBtn' onClick={()=>{handleEditTask(task.id)}} disabled={isComplete} ><Edit fontSize="small"/></button>
                      <button className='completeBtn'  onClick={()=>{handleCompleteTask(task.id)}}><Done fontSize="small"/></button> */}
                    </div>
                    <p>Created on: {`${date.getDate()} /${date.getMonth()+1} / ${date.getFullYear()} Time:  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` }</p>
                  </li>
                  
               </div>
          })}
      </ul>
    </section>
  )
}

export default AddTask;