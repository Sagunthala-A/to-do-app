import React, { useContext } from 'react'
import DataContext from '../../../data/DataContext';
import './CompletedTask.css';

const CompletedTask = () => {
    const  {taskItemsList,searchVal} = useContext(DataContext);
    let completedTaskArr = taskItemsList.filter((task)=> task.completed == true).filter((val) => (val.title).includes(searchVal))
    let date = new Date();
    return (
      <div className='completedList__wrapper'>
        <ul className='completedList'>
          {
            completedTaskArr.length>0 ? (
              completedTaskArr.map((task)=>(
                <li className='completedList__list'>
                  <h3><span className='completed__tick'> &#x2713; </span>{task.title} </h3>
                  <p>{task.description}</p>
                  <p>Completed on: {`${date.getDate()} /${date.getMonth()+1} / ${date.getFullYear()} Time:  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` }</p>
                </li>
              ))
            ):(
              // <h2>Completed task not found !</h2>
              <h2>No task is completed !</h2>
            )
          }
        </ul>
      </div>
    )
}

export default CompletedTask;

// task
// completed: true
// description: ""
// id: 2
// title:"the"