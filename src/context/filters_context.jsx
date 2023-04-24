import { React, useReducer, useEffect, useContext, createContext } from "react";
import reducer from "../reducers/filters_reducer.jsx";
import { useProductsContext } from "./products_context.jsx";
const FilterContext = createContext();
const initialState = {
  // popular products
  popProducts: [],
  activePopCategory: "office",
  // products page
  allProducts: [],
  filteredProducts: [],
  search: "",
  activeCategory: "all",
  activeCompany: "all",
  activeColor: "all",
  shipping: false,
  minPrice: 0,
  maxPrice: 0,
  price: 0,
  activeSort: "Price (Lowest)",
  gridView: true,
};
export const FilterContextProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  // ! change category
  const changeCategory = (category) => {
    dispatch({ type: "CHANGE_CATEGORY", payload: category });
  };

  // ! sorry products
  const sortProducts = (sort) => {
    dispatch({ type: "SORT_PRODUCTS", payload: sort });
  };

  // ! grid view

  const setGrid = (view) => {
    dispatch({ type: "PRODUCTS_GRID", payload: view });
  };

  // filters //

  // ! search filter
  const searchFilter = (text) => {
    dispatch({ type: "FILTER_SEARCH", payload: text });
  };

  // ! category filter

  const categoryFilter = (category) => {
    dispatch({ type: "FILTER_CATEGORY", payload: category });
  };

  // ! company filter
  const companyFilter = (company) => {
    dispatch({ type: "FILTER_COMPANY", payload: company });
  };

  // ! colors filter
  const colorsFilter = (color) => {
    dispatch({ type: "FILTER_COLORS", payload: color });
  };

  // ! price filter
  const priceFilter = (price) => {
    dispatch({ type: "FILTER_PRICE", payload: price });
  };

  // ! shipping filter
  const shippingFilter = () => {
    dispatch({ type: "FILTER_SHIPPING" });
  };

  // ! clear btn
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  // ! use effects
  // get all products from use products context
  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: products });
  }, [products]);

  // filter products by category
  useEffect(() => {
    changeCategory(state.activePopCategory);
  }, [products, state.activePopCategory]);
  useEffect(() => {
    sortProducts("Price (Lowest)");
  }, [products]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        changeCategory,
        priceFilter,
        categoryFilter,
        companyFilter,
        colorsFilter,
        shippingFilter,
        clearFilters,
        searchFilter,
        sortProducts,
        setGrid,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
