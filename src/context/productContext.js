import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../reducers/productReducer'

// import { createContext, useContext } from "react";

const AppContext = createContext();// 1

const API = "https://api.pujakaitem.com/api/products";


const initialState = {   //10
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
//     isSingleLoading: false,
//     singleProduct: {},
};

const AppProvider = ({ children }) => { //2
    const [state, dispatch] = useReducer(reducer, initialState);//09

    const getProducts = async (url) => { //08
        dispatch({ type: "SET_LOADING" });  // 15
        try { //14
            const res = await axios.get(url); //08.1 import axios and console res get data
            const products = await res.data; //08.2 console p.
            dispatch({ type: "SET_API_DATA", payload: products });    //13
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    useEffect(() => { //07
        getProducts(API);
    }, []);

    return ( //05 ignore value={{ ...state, getSingleProduct }}
        <AppContext.Provider value={{ ...state }}> {/* //11 --> goto p.reducer file*/}
            {children}
        </AppContext.Provider>
    );
};

// custom hooks 06
const useProductContext = () => {  
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext }; //03 AppProvider and 06 AppContext, useProductContext

