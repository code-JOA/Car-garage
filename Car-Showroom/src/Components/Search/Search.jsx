import React from 'react'
import './Search.css'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  return (
    <div className="search">
      <div className="secContainer Container">
        <h3 className="title">Which Vehicle Are You Looking For?</h3>

        <div className="searchDiv grid">
          <input type="text" placeholder="Type" />
          <input type="number" placeholder="Year" />
          <input type="text" placeholder="Model" />
          <input type="text" placeholder="Price" />
          <button className='btn primaryBtn flex'></button>
          <AiOutlineSearch className='icon'/>
          <span>Search</span>
        </div>
      </div>
    </div>
  );
}

export default Search