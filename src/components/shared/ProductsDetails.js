import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";
import useShortTitle from "../../hooks/useShortTitile";
import { Link } from "react-router-dom";

const ProductsDetails = () => {
  const { id } = useParams();
  const products = useContext(ProductContext);
  const data = products[id - 1];
  const { image, price, category, description, title } = data;

  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{useShortTitle(title)}</h3>
        <p>{description}</p>
        <p>category: {category}</p>
        <div>
          <span>price : $ {price}</span>
          <Link to="/products">Back to Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
