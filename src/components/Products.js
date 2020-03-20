import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

// Components
import Product from "./Product";

const Products = () => {
  const data = useContext(ProductContext);
  console.log("**", data);

  return (
    <div className="products-container">
      {data.products.map(product => (
        <Product key={product.id} product={product} addItem={data.addItem} />
      ))}
    </div>
  );
};

export default Products;
