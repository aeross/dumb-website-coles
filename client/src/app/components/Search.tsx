import React from 'react'

function Search() {
  return (
    <div>
        <input 
            type="text" 
            placeholder="Search products" 
            className="p-[0.3rem] pl-4 bg-slate-100 rounded-3xl w-[35vw] m-4 border-2 border-slate-400" 
        />
        <button id="input-submit">Search</button>
    </div>
  )
}

export default Search