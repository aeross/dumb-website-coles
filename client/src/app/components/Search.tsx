"use client"
import React from 'react'
import { MdSearch } from "react-icons/md";

function Search() {
  return (
    <div className="flex items-center">
        <input 
            type="text" 
            placeholder="Search products" 
            className="p-[0.5rem] py-[0.6rem] pl-4 bg-slate-100 rounded-3xl w-[35vw] m-4 border-[1px] border-slate-400 text-sm" 
        />
        <MdSearch className="text-2xl hover:cursor-pointer hover:text-red-700" onClick={ () => { console.log("clicked") } } />
        {/* <button id="input-submit">Search</button> */}
    </div>
  )
}

export default Search