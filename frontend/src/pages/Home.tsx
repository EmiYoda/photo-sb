import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([""]);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/products/");
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home">
      <button onClick={getProducts}>Get Products</button>
    </div>
  );
};

export default Home;
