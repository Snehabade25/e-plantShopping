import React, { useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
function Home() {
  const [showProductList, setShowProductList] = useState(false);
  const navigate = useNavigate();
  const handleGetStarted = () => { setShowProductList(true); navigate('/plants'); };
  return <main className="landing-page background-image"><div className="landing-overlay"><h1>Welcome To Paradise Nursery</h1><p>Bring home a little more green. Find the perfect plant for your space.</p><button className="primary-button" onClick={handleGetStarted}>Get Started</button>{showProductList && <p className="sr-only">Plant list selected.</p>}<p><Link className="text-link" to="/about">Learn about us</Link></p></div></main>;
}
export default function App() {
  return <div className="app-shell"><header className="site-header"><Link className="brand" to="/">Paradise Nursery</Link><nav className="main-nav" aria-label="Main navigation"><Link to="/">Home</Link><Link to="/plants">Plants</Link><Link to="/cart">Cart</Link><Link to="/about">About Us</Link></nav></header><Routes><Route path="/" element={<Home/>}/><Route path="/plants" element={<ProductList/>}/><Route path="/cart" element={<CartItem/>}/><Route path="/about" element={<AboutUs/>}/><Route path="*" element={<Home/>}/></Routes><footer className="site-footer">© {new Date().getFullYear()} Paradise Nursery</footer></div>;
}
