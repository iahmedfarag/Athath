import { React, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { single_product_url as url } from "../data.js";
import { useProductsContext } from "../context/products_context.jsx";
import { useState } from "react";
import { formatPrice } from "../helpers.js";
const SingleProduct = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { id } = useParams();
  const { getSingleProduct, singleProduct, singleProductLoading } =
    useProductsContext();
  useEffect(() => {
    window.scrollTo(0, 0);
    getSingleProduct(`${url}${id}`);
  }, [id]);

  if (singleProductLoading) {
    return <h1>Loading......</h1>;
  }
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
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <li key={index}>
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </li>
    );
  });
  return (
    <section className="single">
      <div className="container">
        <div className="product-images">
          <div className="main">
            <img src={images ? images[activeIndex].url : ""} alt="" />
          </div>
          <div className="imgs">
            {images?.map((img, index) => {
              if (index === 3) {
                return;
              }
              return (
                <img
                  src={img.url}
                  key={img.id}
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="product-info">
          <h2 className="title">
            {name?.charAt(0).toUpperCase() + name?.slice(1)}
          </h2>
          <div className="rate">
            <ul>{tempStars}</ul>
            <p>({reviews} customers reviews)</p>
          </div>
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
            <div className="line colors">
              <p>Colors:</p>
              <ul>
                {colors?.map((color) => {
                  return <li style={{ background: color }}></li>;
                })}
              </ul>
            </div>
          </div>

          <p className="product-desc">{description}</p>
          <div className="add">
            <div className="amount-control">
              <button className="minus">
                <AiOutlineMinus />
              </button>
              <p className="amount">1</p>
              <button className="plus">
                <AiOutlinePlus />
              </button>
            </div>

            <button className="discover-btn">ADD TO CART</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
