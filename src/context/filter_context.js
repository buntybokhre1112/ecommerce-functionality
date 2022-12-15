import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducers/filterReducer";

const FilterContext = createContext(); //17 --123

const initialState = { //20.1
  filter_products: [],
  all_products: [],
//   grid_view: true,
  sorting_value: "lowest", //24.4
  filters: {
    text: "",
    category: 'all',
    company: 'all',
  },
};

export const FilterContextProvider = ({ children }) => { //17.1
  const { products } = useProductContext(); //19

  const [state, dispatch] = useReducer(reducer, initialState); //20


//   // sorting function // 24 --12345
  const sorting = (event) => {
    let userValue = event.target.value; 
    // console.log('userValue', userValue);
    dispatch({ type: "GET_SORT_VALUE", payload: userValue }); //24.2
  };

//   // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

//   // to sort the product
  useEffect(() => { //24.5 only sorting val[]
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" }); //24.6
  }, [products,state.sorting_value,state.filters]);
  

//   // to load all the products for grid and list view
  useEffect(() => { //21 goto filter red f
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        sorting,
        updateFilterValue,
      }}>     {/* 17.2 // 24.1 pass sorting */}
       {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => { //17.3 goto index f
  return useContext(FilterContext);
};