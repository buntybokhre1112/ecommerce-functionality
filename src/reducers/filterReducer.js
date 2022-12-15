const filterReducer = (state, action) => {
    switch (action.type) { //22
      case "LOAD_FILTER_PRODUCTS"://23
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
        };
  

      case "GET_SORT_VALUE": //24.3

        return {
          ...state,
          sorting_value: action.payload,
        };
  
      case "SORTING_PRODUCTS": //24.7
        let newSortData; //24.8
        //let tempSortProduct = [...action.payload]; // 24.9
        // 28
        const { filter_products, sorting_value } = state;
        let tempSortProduct = [...filter_products];
        // console.log('temsort', tempSortProduct);
  
        const sortingProducts = (a, b) => {
          
          if (sorting_value === "lowest") {
            return a.price - b.price;
          }
  
          if (sorting_value === "highest") {
            return b.price - a.price;
          }
  
          if (sorting_value === "a-z") {
            return a.name.localeCompare(b.name);
          }
  
          if (sorting_value === "z-a") {
            return b.name.localeCompare(a.name);
          }
        };
  
        newSortData = tempSortProduct.sort(sortingProducts);
        console.log('newSortData', newSortData);
        return {
          ...state,
          filter_products: newSortData,
        };
      case "UPDATE_FILTERS_VALUE":
        const {name,value} = action.payload;
        return{
          ...state,
          filters:{
            ...state.filters,
            [name] : value,
          }
        };
      case 'FILTER_PRODUCTS':
        let {all_products} = state;
        let tempFilterProduct = [...all_products];
        const {text, category} = state.filters;
        if(text){
          tempFilterProduct = tempFilterProduct.filter((value)=>{
            return value.name.toLowerCase().includes(text);
          })
        }
        if(category !== 'All'){
          tempFilterProduct = tempFilterProduct.filter((value)=>{
            return value.category === category;
          })
        }
        return{
          ...state,
          filter_products: tempFilterProduct,
        }
      default:
        return state;
    }
  };
  
  export default filterReducer;