import React from "react";
import { products } from "../data";

const HomePage = () => {
  return (
    <main>
      <section>{products.map((product) => {})}</section>
    </main>
  );
};

export default HomePage;
