const products_reducer = (state, action) => {
  if (action.type === "GET_PRODUCTS") {
    return { ...state, productsLoading: true };
  }

  if (action.type === "GOT_PRODUCTS") {
    const products = [...action.payload];
    const productsLike = [...products.filter((product) => product.featured)];
    return {
      ...state,
      productsLoading: false,
      productsError: false,
      products,
      productsLike,
    };
  }

  if (action.type === "GET_SINGLE_PRODUCT") {
    return { ...state, singleProductLoading: true };
  }
  if (action.type === "GOT_SINGLE_PRODUCT") {
    return {
      ...state,
      singleProductError: false,
      singleProduct: action.payload,
      singleProductLoading: false,
    };
  }

  return state;
};

export default products_reducer;
