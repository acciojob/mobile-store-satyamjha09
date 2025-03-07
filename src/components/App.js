
import React, { useState } from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import EditProduct from "./EditProduct";
const initialProducts = [
  { id: 1, name: "iPhone 14", price: "$999", description: "Latest Apple iPhone.", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Samsung Galaxy S22", price: "$899", description: "Flagship Samsung device.", image: "https://via.placeholder.com/150" },
  { id: 3, name: "OnePlus 10 Pro", price: "$799", description: "Powerful and fast.", image: "https://via.placeholder.com/150" }
];
const App = () => {
  const [products, setProducts] = useState(initialProducts);
  return (
    <Router>
      <nav>
        <Link to="/" className="nav-link">Home</Link> | 
        <Link to="/admin" className="nav-link">Admin Panel</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/products/:id" element={<ProductDetails products={products} />} />
        <Route path="/admin" element={<AdminPanel products={products} setProducts={setProducts} />} />
        <Route path="/admin/edit/:id" element={<EditProduct products={products} setProducts={setProducts} />} />
      </Routes>
    </Router>
  );
};
export default App;