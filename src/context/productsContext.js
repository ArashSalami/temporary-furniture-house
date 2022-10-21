import { createContext, useReducer, useContext } from "react";
import productReducer from "../reducers/productsReducer";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";
import axios from "axios";
import { useEffect } from "react";
import { products_url } from "../utils/constants";

const initialState = {
  isSidebarOpen: false,
  products: [],
  featured_products: [],
  products_loading: false,
  products_error: false,
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    const getData = async () => {
      try {
        const response = await axios(products_url);
        const products = response.data;
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
      } catch (error) {
        dispatch({ type: GET_PRODUCTS_ERROR });

        console.log(error);
      }
    };
    getData();
  }, []);

  // console.log(state.products, state.featured_products);

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });

    try {
      const response = await axios(url);
      const singleProduct = response.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
