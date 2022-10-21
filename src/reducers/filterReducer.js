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

const filterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((product) => {
      return product.price;
    });
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }

  if (action.type === UPDATE_SORT) {
    const { value } = action.payload;
    return { ...state, sort: value };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "name-asc") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-desc") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    if (sort === "price-asc") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sort === "price-desc") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }
    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FILTER_PRODUCTS) {
    let tempProducts = [...state.all_products];
    const { text, color, company, category, max_price, price, shipping } = state.filters;
    if (text) {
      tempProducts = tempProducts.filter((product) => product.name.includes(text));
    }
    if (company !== "all") {
      tempProducts = tempProducts.filter((product) => product.company === company);
    }
    if (category !== "all") {
      tempProducts = tempProducts.filter((product) => product.category === category);
    }
    if (price !== max_price) {
      tempProducts = tempProducts.filter((product) => product.price <= price);
    }

    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => product.colors.find((c) => c === color));
    }
    if (shipping === true) {
      tempProducts = tempProducts.filter((product) => product.shipping === true);
    }
    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        color: "all",
        company: "all",
        category: "all",
        min_price: 0,
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }

  return state;
};

export default filterReducer;
