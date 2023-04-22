import React from "react";
import {
  Hero,
  PopularProducts,
  TextSection,
  ProductsLike,
  InstagramSection,
  Features,
} from "../Page.js";
const HomePage = () => {
  return (
    <>
      <Hero />
      <PopularProducts />
      <TextSection />
      <ProductsLike />
      <InstagramSection />
      <Features />
    </>
  );
};

export default HomePage;
