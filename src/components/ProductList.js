import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => (
    <div>
      <h2>Product Listings</h2>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} width="100" />
          </Link>
        </div>
      ))}
    </div>
);

export default ProductList