import React from "react";

import useShortTitle from "../../hooks/useShortTitile";

import { Link } from "react-router-dom";

const Products = ({ product }) => {
  const { title, image, price, id } = product;

  return (
    <div>
      <img
        src={image}
        alt={title}
        style={{ width: "250px", height: "250px" }}
      />
      <h3>{useShortTitle(title)}</h3>
      <p>$ {price}</p>
      <div>
        <Link to={`/products/${id}`}>Details</Link>
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
