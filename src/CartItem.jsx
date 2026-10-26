import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';
function Navbar() {
 const items = useSelector((state) => state.cart.items);
 const count = items.reduce((sum,item) => sum + item.quantity, 0);
 return <nav className="shop-navbar" aria-label="Shop navigation"><Link to="/">Home</Link><Link to="/plants">Plants</Link><Link to="/cart">🛒 Cart <span className="cart-count">{count}</span></Link></nav>;
}
export default function CartItem() {
 const dispatch = useDispatch();
 const cartItems = useSelector((state) => state.cart.items);
 const totalAmount = cartItems.reduce((sum,item) => sum + item.cost * item.quantity, 0);
 const handleIncrement = (item) => dispatch(updateQuantity({name:item.name,quantity:item.quantity + 1}));
 const handleDecrement = (item) => item.quantity <= 1 ? dispatch(removeItem(item.name)) : dispatch(updateQuantity({name:item.name,quantity:item.quantity - 1}));
 const handleRemove = (item) => dispatch(removeItem(item.name));
 return <main className="page-wrap"><Navbar/><section className="cart-container"><h1>Shopping Cart</h1>{cartItems.length === 0 ? <div className="empty-cart"><p>Your cart is empty.</p><Link to="/plants" className="primary-button">Continue Shopping</Link></div> : <><div className="cart-items">{cartItems.map((item) => <article className="cart-item" key={item.name}><img className="cart-item-image" src={item.image} alt={item.name}/><div className="cart-item-details"><h2>{item.name}</h2><p>Unit price: ${item.cost.toFixed(2)}</p><p>Item total: ${(item.cost * item.quantity).toFixed(2)}</p><div className="quantity-controls"><button aria-label={`Decrease ${item.name}`} onClick={() => handleDecrement(item)}>-</button><span aria-live="polite">{item.quantity}</span><button aria-label={`Increase ${item.name}`} onClick={() => handleIncrement(item)}>+</button></div><button className="delete-button" onClick={() => handleRemove(item)}>Delete</button></div></article>)}</div><div className="cart-summary"><h2>Total: ${totalAmount.toFixed(2)}</h2><button className="primary-button" onClick={() => window.alert('Coming Soon!')}>Checkout</button><Link to="/plants" className="secondary-button">Continue Shopping</Link></div></>}</section></main>;
}
