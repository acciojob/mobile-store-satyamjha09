import React from "react";
import { useParams } from "react-router-dom";
function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  if (!product) return <h2>Product not found</h2>;
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="200" />
      <p>Price: {product.price}</p>
    </div>
  );
}
export default ProductDetails;
