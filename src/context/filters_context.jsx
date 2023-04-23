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
};
export const FilterContextProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  // ! change category
  const changeCategory = (category) => {
    dispatch({ type: "CHANGE_CATEGORY", payload: category });
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
  return (
    <FilterContext.Provider value={{ ...state, changeCategory }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
