import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const EditProduct = ({ products, setProducts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [formData, setFormData] = useState({ ...product });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts(products.map((p) => (p.id === parseInt(id) ? formData : p)));
    navigate("/admin");
  };
  return (
    <div className="edit-product">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} />
        <input name="price" value={formData.price} onChange={handleChange} />
        <input name="description" value={formData.description} onChange={handleChange} />
        <button type="submit" className="save-btn">Save</button>
      </form>
    </div>
  );
};
export default EditProduct;
