import React from 'react'

function Search() {
  return (
    <div>
        <input 
            type="text" 
            placeholder="Search products" 
            className="p-2 pl-4 bg-slate-200 rounded-3xl w-[35vw] m-4 border-2 border-slate-400" 
        />
        <button>Search</button>
    </div>
  )
}

export default Search