import React, { useEffect, useState, createContext } from "react";
import Fetch from "../hooks/useFetch";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [gettingData, setGettingData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setGettingData(await Fetch());
    };

    fetchApi();
  }, []);

  console.log(gettingData);

  return (
    <ProductContext.Provider value={gettingData}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
