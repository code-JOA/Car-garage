import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className='search'>
        <div className="secContainer Container">
          <h3 className="title">
            Which Vehicle Are You Looking For?
          </h3>

          <div className="searchDiv grid">
            <input type="text" />
          </div>
        </div>
    </div>
  )
}

export default Search