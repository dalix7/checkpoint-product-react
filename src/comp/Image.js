import React from "react";
import Product from "./Product";

const Image = () => {
  return (
    <div className="image">
      <img style={{ width: "100%" }} src={Product.img_URL} alt="" />
    </div>
  );
};

export default Image;
