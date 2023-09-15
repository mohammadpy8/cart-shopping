import React from "react";

import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
