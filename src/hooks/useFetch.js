import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://fakestoreapi.com"

const useFetch = async () => {

    const { data } = await axios.get(`${BASE_URL}/products`);
    return data;

};

export default useFetch;
