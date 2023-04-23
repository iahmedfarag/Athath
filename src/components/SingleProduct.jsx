import React from "react";
import product6 from "../assets/product06.png";
import product7 from "../assets/product07.png";
import product8 from "../assets/product10.png";
import product9 from "../assets/product11.png";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar } from "react-icons/ai";
const SingleProduct = () => {
  return (
    <section className="single">
      <div className="container">
        <div className="product-images">
          <div className="main">
            <img src={product6} alt="" />
          </div>
          <div className="imgs">
            <img src={product6} alt="" />
            <img src={product7} alt="" />
            <img src={product8} alt="" />
            <img src={product9} alt="" />
          </div>
        </div>

        <div className="product-info">
          <h2 className="title">Faded SkyBlu Denim Jeans</h2>
          <div className="rate">
            <ul>
              <li>
                <AiFillStar />
              </li>
              <li>
                <AiFillStar />
              </li>
              <li>
                <AiFillStar />
              </li>
              <li>
                <AiFillStar />
              </li>
            </ul>
            <p>(100 customers reviews)</p>
          </div>
          <h2 className="price">$149.99</h2>

          <div className="product-stack">
            <div className="line">
              <p>category:</p> <span className="category">btngan</span>
            </div>
            <div className="line">
              <p>Avaialblity:</p>
              <span>mogod</span>
            </div>
            <div className="line">
              <p>SKU:</p>
              <span>RecQ0fMd8T0Vk211E</span>
            </div>
            <div className="line colors">
              <p>Colors:</p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>

          <p className="product-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit
            id ea numquam, mollitia ullam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Optio sit id ea numquam, mollitia
            ullam!
          </p>
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
