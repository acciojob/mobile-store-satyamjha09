import React, { useState } from 'react'
import productsData from './data'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import AdminPanel from './AdminPanel';

const App = () => {
    const [products, setProducts] = useState(productsData);

  return (
    <Router>
        <nav>
           <Link to="/">Home</Link>
           <Link to="/admin">Admin</Link>
        </nav>
        <Routes>
            <Route path="/" element={<ProductList products={products} />} />
            <Route path="/products/id" element={<ProductDetails products={products}  />} />
            <Route path="/admin" element={<AdminPanel products={products} setProducts={setProducts} />} />
        </Routes>
    </Router>
  )
}

export default App