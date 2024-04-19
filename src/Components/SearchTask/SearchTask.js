import React, { useContext, useState } from 'react'
import DataContext from '../../data/DataContext';
import './SearchTask.css';

const SearchTask = () => {
  const {searchVal,setSearchVal} = useContext(DataContext)
  return (
    <div className='searchTask'>
        <input 
          type="search"
          value={searchVal}
          onChange={(e)=>{setSearchVal(e.target.value)}}
          placeholder='Search your task in here...'
        />
    </div>
  )
}

export default SearchTask