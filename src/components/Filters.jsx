import React from "react";
import { useFilterContext } from "../context/filters_context.jsx";
import { formatPrice, getUniqueValues } from "../helpers.js";

const Filters = () => {
  const {
    allProducts,
    activeCategory,
    activeCompany,
    activeColor,
    shipping,
    minPrice,
    maxPrice,
    price,
    priceFilter,
    search,
    categoryFilter,
    companyFilter,
    colorsFilter,
    shippingFilter,
    clearFilters,
    searchFilter,
  } = useFilterContext();

  const categories = getUniqueValues(allProducts, "category");
  const companies = getUniqueValues(allProducts, "company");
  const colors = getUniqueValues(allProducts, "colors");

  return (
    <section className="filters">
      <h3>Filter Products</h3>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            searchFilter(e.target.value);
          }}
        />

        <ul className="categories">
          <h4>Category</h4>
          <ul>
            {categories.map((category, index) => {
              return (
                <li
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => {
                    categoryFilter(category);
                  }}
                  key={index}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </ul>

        <div className="companies">
          <h4>Company</h4>
          <select
            name="companies"
            value={activeCompany}
            onChange={(e) => {
              companyFilter(e.target.value);
            }}
          >
            {companies.map((company, index) => {
              return (
                <option value={company} key={index}>
                  {company}
                </option>
              );
            })}
          </select>
        </div>

        <div className="colors">
          <h4>Colors</h4>
          <ul>
            {colors.map((color, index) => {
              return (
                <li
                  style={{ background: color }}
                  className={
                    index === 0 && activeColor === color
                      ? "all active"
                      : index === 0
                      ? "all"
                      : null
                  }
                  key={index}
                  onClick={() => {
                    colorsFilter(color);
                  }}
                >
                  {index === 0 ? <p>All</p> : null}
                  {activeColor === color && index !== 0 ? (
                    <p>&#10004;</p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="price">
          <h4>Price</h4>
          <p>{formatPrice(price)}</p>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={(e) => {
              priceFilter(e.target.value);
            }}
          />
        </div>

        <div className="shipping">
          <p>Free Shipping</p>
          <input
            type="checkbox"
            checked={shipping}
            onChange={() => shippingFilter()}
          />
        </div>

        <button className="clear" onClick={clearFilters}>
          Clear Filters
        </button>
      </form>
    </section>
  );
};

export default Filters;
