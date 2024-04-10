import React,{useState,useEffect, useContext} from 'react'

// import '../Styles/Contents.css'
// import Search from '../Search/Search';
import GetInput from './../GetInput/GetInput';
import DataContext from './../../data/DataContext';
import AddTask from './../AddTask/AddTask';
import SearchTask from '../SearchTask/SearchTask'
import CompletedTask from '../Pages/CompletedTask';
import AllTasks from '../Pages/AllTasks';
import InProgressTasks from '../Pages/InProgressTasks';

// const staticItems = [
//     {
//         id:1,
//         title:"todo App"
//     },
//     {
//         id:2,
//         title:"typing app"
//     },
//     {
//         id:3,
//         title:"portfolio"
//     }
// ]

const Content = () => {

    const {title,setTitle,description,setDescription,taskItemsList,setTaskItemsList,handleFormSubmit,
      handleAddTask,
      handleDeleteTask,
      handleCompleteTask,
      handleEditTask} = useContext(DataContext)

useEffect (()=>{
    // if(taskItemsList.length > 0){
    //     const gettingList = JSON.parse(localStorage.getItem("tasks"));
    //     console.log(gettingList);
    //     setTaskItemsList([...gettingList]);
    // }
    // localStorage.setItem("tasks",JSON.stringify(taskItemsList)) 

    let itemsArray = localStorage.getItem('tasks') ?
    JSON.parse(localStorage.getItem('tasks')) : [];

    setTaskItemsList(itemsArray);

},[])
    


  return (
    <main>
            <GetInput
                handleFormSubmit = {handleFormSubmit}
                handleAddTask = {handleAddTask}
                title = {title}
                setTitle = {setTitle}
                description = {description}
                setDescription = {setDescription}
                taskItemsList = {taskItemsList}  
            ></GetInput>
            {/* <Search 
                handleFormSubmit = {handleFormSubmit}
            ></Search> */}
            <div style={{display:"flex",alignItems:"end",gap:"20px"}}>
                <InProgressTasks/>
                <CompletedTask/>
                <AllTasks/>
            </div>
            <SearchTask/>
            <AddTask
                taskItemsList = {taskItemsList}
                handleAddTask = {handleAddTask}  
                handleDeleteTask={handleDeleteTask}
                handleCompleteTask={handleCompleteTask}  
                handleEditTask = {handleEditTask}
            ></AddTask>
            {/* <ul>
                {taskItemsList.map((item)=>{
                     return <>
                     <h1>{item.title}</h1>
                     <span>{item.description}</span>
                     <button>delete</button>
                     <button>edit</button>
                     <button>complete</button>
                     </>
                })}
            </ul>
             */}
    </main>
  )
}

export default Content;



// const [count,setCount] = useState('');

// setCount((previounCount) => previounCount+1)