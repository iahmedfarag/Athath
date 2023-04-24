import React, { useEffect } from "react";
import {
  Hero,
  PopularProducts,
  TextSection,
  ProductsLike,
  InstagramSection,
  Features,
} from "../Page.js";
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <PopularProducts />
      <TextSection />
      <ProductsLike />
      <InstagramSection />
    </>
  );
};

export default HomePage;
