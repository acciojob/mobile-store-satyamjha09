import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AdminPanel = ({ products, setProducts }) => {
    const navigate = useNavigate();
  
    const deleteProduct = (id) => {
      setProducts(products.filter((p) => p.id !== id));
    };
  
    return (
      <div>
        <h2>Admin Panel</h2>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <button onClick={() => navigate(`/admin/edit/${product.id}`)}>Edit</button>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
        ))}
        <Link to="/">Back to Products</Link>
      </div>
    );
  };
  

export default AdminPanel