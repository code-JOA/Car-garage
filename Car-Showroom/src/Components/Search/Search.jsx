import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className="search">
      <div className="secContainer Container">
        <h3 className="title">Which Vehicle Are You Looking For?</h3>

        <div className="searchDiv grid">
          <input type="text" placeholder="Type" />
          <input type="text" placeholder="Year" />
          <input type="text" placeholder="Model" />
          <input type="text" placeholder="Price" />
        </div>
      </div>
    </div>
  );
}

export default Search