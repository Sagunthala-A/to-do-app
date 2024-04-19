import React, { useContext } from 'react'
import DataContext from '../../../data/DataContext';
import './InProgressTasks.css';

const InProgressTasks = () => {
    const {taskItemsList,searchVal} = useContext(DataContext);
    let completedTaskArr = taskItemsList.filter((task)=> task.completed !== true).filter((val) => (val.title).includes(searchVal))
    let date = new Date();
  return (
    <div className='inProgressList__wrapper'>
      <ul className='inProgressList'>
        {
          completedTaskArr.length>0 ? (
            completedTaskArr.map((task)=>(
              <li className='inProgressList__list'>
                  <h3>{task.title} </h3>
                  <p>{task.description}</p>
                  <p>Starting on: {`${date.getDate()} /${date.getMonth()+1} / ${date.getFullYear()} Time:  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` }</p>
                </li>
          ))
          ):(
            <h2>No Task is in progress !</h2>
          )
        }
      </ul>
    </div>
  )
}

// task
// completed: true
// description: ""
// id: 2
// title:"the"

export default InProgressTasks;