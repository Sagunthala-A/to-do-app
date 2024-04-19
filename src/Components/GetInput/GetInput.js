import React, { useContext } from 'react';
import DataContext from '../../data/DataContext';
import './GetInput.css'

const GetInput = () => {
  const {handleFormSubmit,handleAddTask,title,setTitle,description,setDescription} = useContext(DataContext)
  return (

    <form className='input-container' onSubmit={handleFormSubmit}> 
      <div className="input-items">
        <label htmlFor='title'>Title</label> 
        <input 
          id='title' 
          placeholder="What's the title task ?"
          required
          // autoFocus
          value = {title}
          onChange={(e) => {setTitle(e.target.value)}}
        ></input>
      </div>

      <div className="input-items">
        <label htmlFor='description'>Description</label> 
        <input 
          id='description' 
          placeholder="What's the task description ?"
          required
          value = {description}
          onChange = {(e) => {setDescription(e.target.value)}}
        ></input>
      </div>
         <div className='input-items'>
          <button onClick={handleAddTask} className='addBtn'>Add</button>
         </div>  

         
    </form>
  )
}

export default GetInput