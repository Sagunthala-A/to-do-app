import React,{useEffect, useContext} from 'react'
import GetInput from './../GetInput/GetInput';
import DataContext from './../../data/DataContext';
import SearchTask from '../SearchTask/SearchTask'
import { NavLink, Outlet, Route, Router } from 'react-router-dom';
import './Content.css'
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
            <GetInput/>
            <div className='taskLinksBtnsGrps'>
                <NavLink className='taskLinksBtn all' activeClassName='active' exact to="/">ALL TASKS</NavLink>
                <NavLink className='taskLinksBtn complete' activeClassName='active' to="/completedtask">COMPLETED TASKS</NavLink>
                <NavLink className='taskLinksBtn  progress' activeClassName='active' to="/progresstask">ACTIVE TASKS</NavLink>
                <Outlet/>
            </div>
            <SearchTask/>
    </main>
  )
}

export default Content;



// const [count,setCount] = useState('');

// setCount((previounCount) => previounCount+1)