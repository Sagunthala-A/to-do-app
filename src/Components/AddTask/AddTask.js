import React,{useContext} from 'react';
import DataContext from '../../data/DataContext';
import "./AddTask.css";
import {Delete,Edit,DoneOutline} from '@mui/icons-material';

const AddTask = () => {
  let date = new Date();
  const  {taskItemsList,handleDeleteTask,handleCompleteTask,handleEditTask,searchVal} = useContext(DataContext);
  let filteredTask = taskItemsList.filter((val) => (val.title).includes(searchVal))
  return (
    <section> 
      <ul className='ulWrapper'>
        { 
          filteredTask.length>0 ? 
            (filteredTask.map((task)=>{
              return(
                <li key ={task.id} className={task.completed? 'lists completedLists' : 'lists'}>
                  <h3>{task.title} </h3>
                  <p>{task.description}</p>
                  <div style={{marginTop:"10px"}} className='taskBtns'>
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
                  </div>
                    <p>Created on: {`${date.getDate()} /${date.getMonth()+1} / ${date.getFullYear()} Time:  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` }</p>
                </li>)
          })):(
            <h2>Task not found !</h2>
          )
        }
      </ul>
    </section>
  )
}

export default AddTask;