import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
  
    if (!product) return <h2>Product not found</h2>;
  
    return (
      <div>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} width="150" />
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <Link to="/">Back to Products</Link>
      </div>
    );
  };
  

export default ProductDetails