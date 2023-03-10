import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../reducers/productReducer'

// import { createContext, useContext } from "react";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";


const initialState = {   
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
};

const AppProvider = ({ children }) => { 
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => { 
        dispatch({ type: "SET_LOADING" });  
        try { 
            const res = await axios.get(url); 
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });  
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    useEffect(() => { 
        getProducts(API);
    }, []);

    return ( 
        <AppContext.Provider value={{ ...state }}> 
            {children}
        </AppContext.Provider>
    );
};

// custom hooks 06
const useProductContext = () => {  
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext }; 

