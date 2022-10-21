import { createContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import filterReducer from "../reducers/filterReducer";
import { useProductsContext } from "./productsContext";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const FilterContext = createContext();

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "name-asc",
  filters: {
    text: "",
    color: "all",
    company: "all",
    category: "all",
    max_price: 1000,
    min_price: 0,
    price: 0,
    shipping: false,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(filterReducer, initialState);
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [state.filters, state.sort, products]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    console.log(e.target.value);
    dispatch({
      type: UPDATE_SORT,
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({
      type: UPDATE_FILTERS,
      payload: { name, value },
    });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilters,
        clearFilters,
        setGridView,
        setListView,
        updateSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
