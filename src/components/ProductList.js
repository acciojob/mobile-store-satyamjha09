import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <Link to={`/products/${product.id}`} className="product-link">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
