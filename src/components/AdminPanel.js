import React from "react";
function AdminPanel({ products, setProducts }) {
  const deleteProduct = id => setProducts(products.filter(p => p.id !== id));
  return (
    <div>
      <h2>Admin Panel</h2>
      {products.map(product => (
        <div key={product.id}>
          <p>{product.name} - {product.price}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default AdminPanel;