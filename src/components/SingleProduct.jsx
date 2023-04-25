import { React, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { single_product_url as url } from "../data.js";
import { useProductsContext } from "../context/products_context.jsx";
import { useState } from "react";
import { formatPrice } from "../helpers.js";
import {
  AddToCart,
  Colors,
  Loading,
  ProductImages,
  ProductRate,
} from "../Page.js";

const SingleProduct = () => {
  const { getSingleProduct, singleProduct, singleProductLoading } =
    useProductsContext();

  const [amount, setAmount] = useState(1);
  const [mainColor, setMainColor] = useState(null);

  const { id } = useParams();

  const {
    id: sku,
    images,
    colors,
    price,
    stock,
    shipping,
    category,
    reviews,
    stars,
    name,
    description,
    company,
  } = singleProduct;

  const nPrice = formatPrice(price);

  const setColor = () => {
    setMainColor(c);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getSingleProduct(`${url}${id}`);
  }, [id]);

  if (singleProductLoading) {
    return <Loading />;
  }

  return (
    <section className="single">
      <div className="container">
        <ProductImages images={images} />
        <div className="product-info">
          <h2 className="title">
            {name?.charAt(0).toUpperCase() + name?.slice(1)}
          </h2>
          {/* rate */}
          <ProductRate stars={stars} reviews={stars} />
          <h2 className="price">{nPrice}</h2>
          <div className="product-stack">
            <div className="line">
              <p>category:</p> <span className="category">{category}</span>
            </div>
            <div className="line">
              <p>Avaialblity:</p>
              <span>{stock === 0 ? "Not Avaialble" : `${stock} in Stcok`}</span>
            </div>
            <div className="line">
              <p>SKU:</p>
              <span>{sku}</span>
            </div>
            <Colors
              singleProduct={singleProduct}
              setMainColor={setMainColor}
              mainColor={mainColor}
            />
          </div>
          <p className="product-desc">{description}</p>

          {/* add to cart */}
          <AddToCart
            amount={amount}
            setAmount={setAmount}
            singleProduct={singleProduct}
            mainColor={mainColor}
          />
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
