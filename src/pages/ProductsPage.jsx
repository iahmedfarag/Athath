import React from "react";
import { Header, Filters, Sort, Products } from "../Page.js";

const ProductsPage = () => {
  return (
    <>
      <Header page={"Products"} />
      <div className="products-page">
        <div className="container">
          <h1>SHOP WITH US</h1>
          <Filters />
          <Products />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
