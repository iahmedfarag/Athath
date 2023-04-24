import React, { useEffect } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { useFilterContext } from "../context/filters_context.jsx";
const Sort = () => {
  const { filteredProducts, sortProducts, activeSort, gridView, setGrid } =
    useFilterContext();

  return (
    <section className="sort">
      <div className="display">
        <button
          className={gridView ? "active" : ""}
          onClick={() => {
            setGrid(true);
          }}
        >
          <BsFillGridFill />
        </button>
        <button
          className={!gridView ? "active" : ""}
          onClick={() => {
            setGrid(false);
          }}
        >
          <FaThList />
        </button>
      </div>
      <div className="length">
        <p>{filteredProducts.length} Products found</p>
      </div>
      <div className="line"></div>
      <div className="by">
        <p>Sort By</p>
        <select
          value={activeSort}
          onChange={(e) => {
            sortProducts(e.target.value);
          }}
        >
          <option value="Price (Lowest)">Price (Lowest)</option>
          <option value="Price (Highest)">Price (Highest)</option>
          <option value="Name (A-Z)">Name (A-Z)</option>
          <option value="Name (Z-A)">Name (Z-A)</option>
        </select>
      </div>
    </section>
  );
};

export default Sort;
