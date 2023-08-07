"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const Fetch2 = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await fetch('https://xcn24sra.api.sanity.io/v2023-07-02/data/query/production?query=*%5B_type%3D%3D%22productsan%22%5D');
          const data = await response.json();
          setProduct(data.result);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
  
      fetchProduct();
    }, []);
  
    if (!product) {
      return <div>Loading...</div>;
    }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Category: {product.Category}</p>
      <p>Price: {product.Price}</p>
      {/* <img src={`https://cdn.sanity.io/images/xcn24sra/production/${product.Image.asset._ref.split('-')[0]}.${product.Image.asset._ref.split('-')[1]}`} alt="Product" /> */}
    </div>
  );
};

export default Fetch2;
