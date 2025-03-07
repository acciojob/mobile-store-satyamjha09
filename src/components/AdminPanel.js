import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = ({ products, setProducts }) => {
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      {products.map((product, index) => (
        <div key={product.id} className="product-row">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <Link to={`/admin/edit/${product.id}`} className="edit-btn">Edit</Link>
            <button className="delete-btn" onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
        ))}
    </div>
  );
};

export default AdminPanel;