import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({ products }) => {
  return (
    <div>
        <h2> Mobile Store </h2>
        {products.map(product => (
            <div key={product.id}>
            <img src={product.image} alt={product.name} width="100" />
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            <p>Price: {product.price}</p>
            </div>
      ))}
    </div>
  )
}

export default ProductList