import React from 'react'
import { useFilterContext } from '../context/filter_context'

const FilterSection = () => {
  const {filters: {text}, updateFilterValue} = useFilterContext();
  return (
    <div>
      
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <input type='text' name='text' value={text} onChange={updateFilterValue} placeholder="Search here..."/>
      </form>
    </div>
  )
}

export default FilterSection
