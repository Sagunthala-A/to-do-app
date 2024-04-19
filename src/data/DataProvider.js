import React,{useContext,useState} from 'react';
import DataContext from './DataContext';

function DataProvider(props) {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [taskItemsList,setTaskItemsList] = useState([]);
  const [searchVal,setSearchVal] = useState('');
  const [completedTaskList,setCompletedTaskList] = useState([]); 

  function handleFormSubmit (e){
        e.preventDefault();
  }
  function handleAddTask(){
    if(title !== ""){
      const id = taskItemsList.length > 0 ?  taskItemsList.length+1 : 1;
      const item = {
        id:id,
        title: title,
        description: description,
        completed: false
      }
        const updatedList = [...taskItemsList,item];
        setTaskItemsList(updatedList);
              // setTaskItemsList((prevList) =>[...prevList,item]);
        setTitle('')
        setDescription('')
        localStorage.setItem("tasks",JSON.stringify([...taskItemsList,item]))
      }
    }

    function handleDeleteTask(id){
        const updatedList = taskItemsList.filter((task) => {
            return task.id !== id
        })
        setTaskItemsList(updatedList); 
        localStorage.setItem("tasks",JSON.stringify(updatedList))
    }
    function handleCompleteTask(id){
        const updatedList = taskItemsList.map((task) => {
            if (task.id === id) {
                // Use spread syntax to create a new object with the updated completed property
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTaskItemsList(updatedList);
        localStorage.setItem("tasks",JSON.stringify(updatedList))
    }
    function handleEditTask(id){
        console.log(taskItemsList)
        // alert("do you want to edit your task?");
        const updatedList = taskItemsList.map((task)=>{
            if(task.id === id && !task.completed){
            const updatedDescription = prompt("Please enter a description", task.description);
                return {...task,description:updatedDescription}
            }
            return task;
        })
        setTaskItemsList(updatedList);
        localStorage.setItem("tasks",JSON.stringify(updatedList))
    }

  return (
    <DataContext.Provider value={{
      title,setTitle,
      description,setDescription,
      taskItemsList,setTaskItemsList,
      searchVal,setSearchVal,
      completedTaskList,setCompletedTaskList,
      handleFormSubmit,
      handleAddTask,
      handleDeleteTask,
      handleCompleteTask,
      handleEditTask
    }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider;





