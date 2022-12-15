const ProductReducer = (state, action) => { //12 go productContex file

    switch (action.type) { //16  1234 --> 17 filter_context
      case "SET_LOADING": //16.1
        return {
          ...state,
          isLoading: true,
        };
  
      case "SET_API_DATA": //16.4

        return {
          ...state,
          isLoading: false,
          products: action.payload,
          featureProducts: action.payload,
        };
  
      case "API_ERROR": //16.3
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
  

  
      default: //16.2
        return state;
    }
  };
  
  export default ProductReducer;