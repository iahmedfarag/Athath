import React, { useState } from "react";

const ProductImages = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
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
  );
};

export default ProductImages;
