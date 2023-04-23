import React from "react";

const Filters = () => {
  return (
    <section className="filters">
      <h3>Filter Products</h3>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" className="search" placeholder="Search" />

        <ul className="categories">
          <h4>Category</h4>
          <ul>
            <li className="active">All</li>
            <li>Office</li>
            <li>Living Room</li>
            <li>Kitchen</li>
            <li>Bedroom</li>
            <li>Dining</li>
            <li>Kids</li>
          </ul>
        </ul>

        <div className="companies">
          <h4>Company</h4>
          <select name="companies" id="">
            <option value="">all</option>
            <option value="">liddy</option>
            <option value="">liddy</option>
            <option value="">liddy</option>
          </select>
        </div>

        <div className="colors">
          <h4>Colors</h4>
          <ul>
            <li className="all active">All</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className="price">
          <h4>Price</h4>
          <p>$19563</p>
          <input type="range" name="" id="" />
        </div>

        <div className="shipping">
          <p>Free Shipping</p>
          <input type="checkbox" />
        </div>

        <button className="clear">Clear Filters</button>
      </form>
    </section>
  );
};

export default Filters;
