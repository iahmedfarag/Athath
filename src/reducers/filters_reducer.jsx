const filters_reducer = (state, action) => {
  // ! get products //
  if (action.type === "GET_PRODUCTS") {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
      maxPrice,
      price: maxPrice,
    };
  }

  // ! change popular category //
  if (action.type === "CHANGE_CATEGORY") {
    const popProductsArr = state.allProducts.filter(
      (product) => product.category === state.activePopCategory
    );
    const popProducts =
      popProductsArr.length > 3 ? popProductsArr.slice(0, 3) : popProductsArr;

    return { ...state, activePopCategory: action.payload, popProducts };
  }

  // ! sort products //
  if (action.type === "SORT_PRODUCTS") {
    const { allProducts } = state;
    let tempProducts = [...allProducts];
    if (action.payload === "Price (Lowest)") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (action.payload === "Price (Highest)") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (action.payload === "Name (A-Z)") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (action.payload === "Name (Z-A)") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return {
      ...state,
      activeSort: action.payload,
      filteredProducts: tempProducts,
    };
  }

  // ! set grid view
  if (action.type === "PRODUCTS_GRID") {
    return { ...state, gridView: action.payload };
  }

  // ! filter by search
  if (action.type === "FILTER_SEARCH") {
    let tempProducts = [
      ...state.allProducts.filter((product) =>
        product.name.toLowerCase().startsWith(action.payload)
      ),
    ];
    return {
      ...state,
      filteredProducts: tempProducts,
      search: action.payload,
    };
  }

  // ! filter by category //
  if (action.type === "FILTER_CATEGORY") {
    let tempProducts = [
      ...state.allProducts.filter(
        (product) => product.category === action.payload
      ),
    ];
    if (action.payload === "all") {
      tempProducts = [...state.allProducts];
    }
    return {
      ...state,
      filteredProducts: tempProducts,
      activeCategory: action.payload,
    };
  }

  // ! filter by company //
  if (action.type === "FILTER_COMPANY") {
    let tempProducts = [
      ...state.allProducts.filter(
        (product) => product.company === action.payload
      ),
    ];
    if (action.payload === "all") {
      tempProducts = [...state.allProducts];
    }
    return {
      ...state,
      filteredProducts: tempProducts,
      activeCompany: action.payload,
    };
  }

  // ! filter by color
  if (action.type === "FILTER_COLORS") {
    let tempProducts = [
      ...state.allProducts.filter((product) =>
        product.colors.find((color) => color === action.payload)
      ),
    ];
    console.log(action);
    if (action.payload === "all") {
      tempProducts = [...state.allProducts];
    }
    return {
      ...state,
      filteredProducts: tempProducts,
      activeColor: action.payload,
    };
  }

  // ! filter by price //
  if (action.type === "FILTER_PRICE") {
    let tempProducts = [
      ...state.allProducts.filter((product) => product.price <= state.price),
    ];

    return {
      ...state,
      filteredProducts: tempProducts,
      price: Number(action.payload),
    };
  }

  // ! filter by shipping
  if (action.type === "FILTER_SHIPPING") {
    let tempProducts = [
      ...state.allProducts.filter((product) => product.shipping === true),
    ];
    if (state.shipping === true) {
      return {
        ...state,
        filteredProducts: [...state.allProducts],
        shipping: false,
      };
    }
    return {
      ...state,
      filteredProducts: tempProducts,
      shipping: true,
    };
    return { ...state };
  }

  // ! clear btn
  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filteredProducts: [...state.allProducts],
      search: "",
      activeCategory: "all",
      activeCompany: "all",
      activeColor: "all",
      shipping: false,
      price: state.maxPrice,
      activeSort: "Price (Lowest)",
    };
  }

  return state;
};

export default filters_reducer;
