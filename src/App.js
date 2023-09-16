import React from "react";

import Store from "./components/Store";
import ProductsDetails from "./components/shared/ProductsDetails";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./cart/ShopCart";
import Users from "./app/Users";
import Counter from "./app/Counter";

import { Navigate, Route, Routes } from "react-router-dom";

import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

import "./App.css";

function App() {
  return (
    // <CartContextProvider>
    //   <ProductContextProvider>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/products" element={<Store />} />
    //       <Route path="/products/:id" element={<ProductsDetails />} />
    //       <Route path="/cart" element={<ShopCart />} />
    //       <Route render={() => <Navigate to="/products" />} />
    //     </Routes>
    //   </ProductContextProvider>
    // </CartContextProvider>
    <div>
      <Counter />
      <Users />
    </div>
  );
}

export default App;
