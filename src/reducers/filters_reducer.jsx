const filters_reducer = (state, action) => {
  // ! get products
  if (action.type === "GET_PRODUCTS") {
    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
    };
  }
  // ! change popular category
  if (action.type === "CHANGE_CATEGORY") {
    const popProductsArr = state.allProducts.filter(
      (product) => product.category === state.activePopCategory
    );
    const popProducts =
      popProductsArr.length > 3 ? popProductsArr.slice(0, 3) : popProductsArr;
    return { ...state, activePopCategory: action.payload, popProducts };
  }

  return state;
};

export default filters_reducer;
