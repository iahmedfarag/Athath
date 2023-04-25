import React, { useEffect, useState } from "react";
const Colors = ({ singleProduct, setMainColor, mainColor }) => {
  const { colors } = singleProduct;
  return (
    <div className="line colors">
      <p>Colors:</p>
      <ul>
        {colors?.map((color, index) => {
          // if (index === 0) [setMainColor(color)];
          return (
            <li
              style={{ background: color }}
              key={index}
              onClick={() => {
                setMainColor(color);
              }}
            >
              {mainColor === color ? <p>&#10004;</p> : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Colors;
