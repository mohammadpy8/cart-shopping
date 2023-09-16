import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import useShortTitle from "../hooks/useShortTitile";

const Cart = ({ data }) => {
  const { dispatch } = useContext(CartContext);

  const { title, price, image, quantity } = data;

  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{useShortTitle(title)}</h3>
        <p>$ {price}</p>
        <div>
          <span>{quantity}</span>
        </div>
        <div>
          {quantity > 1 ? (
            <button
              onClick={() => dispatch({ type: "DECREASE", payload: data })}
            >
              -
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEMS", payload: data })}
            >
              trash
            </button>
          )}
          <button onClick={() => dispatch({ type: "INCREASE", payload: data })}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
