import React from 'react'
import { useFilterContext } from '../context/filter_context'

const Sort = () => {
  const { sorting } = useFilterContext();
  // const {sorting } = useFilterContext();
  return (
    // <p>sorting</p>
    <div className='row'>
      {/* <div style={{ 'backgroundColor': "#327ae4" }}>
        Total{`${filter_products.length}`} Product Available
      </div> */}
      <div style={{  'textAlign': 'center'}}>
        <form action='#'>
          <label htmlFor='sort'></label>
          <select name="sort" id="sort" onClick={sorting}>
            <option value="lowest">price(lowest)</option>
            <option value="highest">price(highest)</option>
            <option value="a-z">price(a-z)</option>
            <option value="z-a">price(z-a)</option>
          </select>
        </form>
       </div>
     </div>
  )
}

export default Sort
