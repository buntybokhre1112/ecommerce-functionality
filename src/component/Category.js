
import React from 'react'
import { useFilterContext } from "../context/filter_context";

const Category = () => {
    const { all_products, updateFilterValue } = useFilterContext();

    // get the unique values of each property
    const getUniqueData = (data, attr) => {
        let newVal = data.map((curElem) => {
            return curElem[attr];
        });
        // console.log('category data', newVal);
        return newVal = ["All", ...new Set(newVal)];
    }

    const categoryData = getUniqueData(all_products, "category");
  ;
    return (
        <div >
            
           
            {
                    categoryData.map((curElem, index)=>{
                        return<button className='btn btn-outline-primary filterbtn' key={index} type="button" name='category' value={curElem} onClick={updateFilterValue} style={{'marginRight': "20px"}}>
                            {curElem}
                        </button>
                    })
                }
        </div>
    )
}

export default Category
