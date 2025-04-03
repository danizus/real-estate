import React, { useState } from 'react';
import "./searchbar.scss"

const types = ["buy","rent"];

export default function Searchbar() {

 const [query,setQuery] = useState({
  type:'buy',
  location:'',
  minPrice:0,
  maxPrice:0
 })

 const switchType = (val)=>{
  setQuery(prev => ({...prev,type:val}))
 }
  return (
    <div className='searchBar'>
      <div className='types'>
        {types.map(type=>(
          <button key={type} onClick={()=>switchType(type)} className={type == query.type? "active":'' }>{type}</button>
        ))}
      
      </div>
      <form action="">
        <input type="text" name='location' placeholder='City Location' />
        <input type="text" name='minPrice' min={0} max={100000} placeholder='Minimum Price'/>
        <input type="text" name='maxPrice' min={0} max={100000} placeholder='Maximum Price'/>
        <button type='submit'><img src="/search.png" alt="" /></button>
      </form>
      
    </div>
  )
}
