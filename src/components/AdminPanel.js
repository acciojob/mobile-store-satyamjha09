import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = ({ products, setProducts }) => {
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      {products.map((product) => (
        <div className="col-12" key={product.id}>
        <div>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <Link to={`/admin/edit/${product.id}`}>Edit</Link>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
      </div>
      ))}
    </div>
  );
};

export default AdminPanel;
