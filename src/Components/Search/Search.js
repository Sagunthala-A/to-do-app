import React, { useContext } from 'react';
import DataContext from '../../data/DataContext';

const Search = () => {
  const {handleFormSubmit,searchValue, setSearchValue,taskItemsList} = useContext(DataContext)
  return (
    <form onSubmit={handleFormSubmit}>
        <label htmlFor='search'></label>
        <input type='search' id='search' placeholder='Search your to do in here'
          value = {searchValue}
          onChange={(e)=>{setSearchValue(e.target.value)}}
        ></input>

        {/* {searchValue ? 
          (taskItemsList.map((taskItem)=>{
            return <div>
              {taskItem.title.includes(searchValue) ? <p>{taskItem.title}</p> : <p>No Iems match</p>}
            </div>
          }))
        : null} */}
    </form>
    
  )
}

export default Search;