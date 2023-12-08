"use client"
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from 'use-debounce';

function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchInput, setSearchInput] = useState("");
  // without debounce (when the search button is pressed)
  function handleSearch(searchInput: string) {
    // console.log(`Searching... ${searchInput}`)  // proof that the debounce works!
    const params = new URLSearchParams(searchParams);
    if (searchInput) {
      params.set("search", searchInput);
    } else {
      params.delete("search");
    }
    router.replace(`/products?${params.toString()}`);
  }
  // with debounce (when the seearch input is changed)
  const handleSearchDebounced = useDebouncedCallback(handleSearch, 1000);  // 1000 miliseconds


  return (
    <div className="flex items-center">
        <input 
            type="text" 
            placeholder="Search products" 
            className="p-[0.5rem] py-[0.6rem] pl-4 bg-slate-100 rounded-3xl w-[40vw] max-w-[450px] m-4 border-[1px] border-slate-400 text-sm" 
            value={searchInput}
            onChange={ (e) => { 
              setSearchInput(e.target.value);
              handleSearchDebounced(e.target.value);
            } }
        />
        <MdSearch className="text-2xl hover:cursor-pointer hover:text-red-700" onClick={ () => { 
          handleSearch(searchInput);
        } } />
        {/* <button id="input-submit">Search</button> */}
    </div>
  )
}

export default Search