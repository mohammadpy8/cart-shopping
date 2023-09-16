import React from "react";

import Store from "./components/Store";
import ProductsDetails from "./components/shared/ProductsDetails";

import { Navigate, Route, Routes } from "react-router-dom";

import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

import "./App.css";

function App() {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route render={() => <Navigate to="/products" />} />
        </Routes>
      </ProductContextProvider>
    </CartContextProvider>
  );
}

export default App;
