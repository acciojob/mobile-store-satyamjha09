import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EditProduct = ({ products, setProducts }) => {
    const { id } = useParams();
    const productIndex = products.findIndex((p) => p.id === parseInt(id));
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState(products[productIndex] || {});
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const updatedProducts = [...products];
      updatedProducts[productIndex] = formData;
      setProducts(updatedProducts);
      navigate("/admin");
    };
  
    return (
      <div>
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="price" value={formData.price} onChange={handleChange} required />
          <input type="text" name="description" value={formData.description} onChange={handleChange} required />
          <input type="text" name="image" value={formData.image} onChange={handleChange} required />
          <button type="submit">Update</button>
        </form>
        <button onClick={() => navigate("/admin")}>Cancel</button>
      </div>
    );
  };

export default EditProduct