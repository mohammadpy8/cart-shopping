import React, { useContext } from "react";

import useShortTitle from "../../hooks/useShortTitile";
import { isInCart, quantityCounter } from "../../helper/CartHelper";

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";

const Products = ({ product }) => {
  const { title, image, price, id } = product;
  const { state, dispatch } = useContext(CartContext);

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
          {isInCart(state, id) ? (
            <button
              onClick={() => dispatch({ type: "INCREASE", payload: product })}
            >
              +
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
            >
              Add To Cart
            </button>
          )}
          <p>{quantityCounter(state, id)}</p>
          {quantityCounter(state, id) > 1 && (
            <button
              onClick={() => dispatch({ type: "DECREASE", payload: product })}
            >
              -
            </button>
          )}
          {quantityCounter(state, id) === 1 && (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: product })
              }
            >
              remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
