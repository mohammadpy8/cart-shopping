import React, { useContext } from "react";

import { ProductContext } from "../context/ProductContextProvider";
import Products from "./shared/Products";

const Store = () => {
  const products = useContext(ProductContext);
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {products.map((product) => {
        return <Products key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Store;
