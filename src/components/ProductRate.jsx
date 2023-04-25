import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ProductRate = ({ stars, reviews }) => {
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
    <div className="rate">
      <ul>{tempStars}</ul>
      <p>({reviews} customers reviews)</p>
    </div>
  );
};

export default ProductRate;
