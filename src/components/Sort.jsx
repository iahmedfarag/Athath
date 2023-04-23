import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
const Sort = () => {
  return (
    <section className="sort">
      <div className="display">
        <BsFillGridFill />
        <BsList />
      </div>
      <div className="length">
        <p>22 products found</p>
      </div>
      <div className="line"></div>
      <div className="by">
        <p>Sort By</p>
        <select name="" id="">
          <option value="">Price (Lowest)</option>
          <option value="">Price (Hieghest)</option>
          <option value="">Name (A-Z)</option>
          <option value="">Name (Z-A)</option>
        </select>
      </div>
    </section>
  );
};

export default Sort;
