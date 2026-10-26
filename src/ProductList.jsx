import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';

const plantsArray = [
 { category: 'Air Purifying Plants', plants: [
  {name:'Snake Plant',cost:18,image:'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80',description:'Hardy, low-maintenance foliage.'},
  {name:'Peace Lily',cost:22,image:'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80',description:'Elegant leaves and white blooms.'},
  {name:'Spider Plant',cost:15,image:'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80',description:'Easy-care plant for bright rooms.'},
  {name:'Golden Pothos',cost:16,image:'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80',description:'Trailing leaves with golden tones.'},
  {name:'Areca Palm',cost:28,image:'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=700&q=80',description:'A tropical touch for your space.'},
  {name:'Rubber Plant',cost:25,image:'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80',description:'Bold, glossy foliage.'}
 ]},
 { category: 'Succulents', plants: [
  {name:'Aloe Vera',cost:12,image:'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=700&q=80',description:'Sculptural succulent for sunny windows.'},
  {name:'Jade Plant',cost:14,image:'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80',description:'Compact plant with plump oval leaves.'},
  {name:'Echeveria',cost:10,image:'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=700&q=80',description:'Rosette-shaped succulent.'},
  {name:'Haworthia',cost:11,image:'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80',description:'Small, striking desk plant.'},
  {name:'String of Pearls',cost:19,image:'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80',description:'Bead-like foliage that cascades.'},
  {name:'Zebra Haworthia',cost:13,image:'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=700&q=80',description:'Striped leaves in a compact form.'}
 ]},
 { category: 'Decorative Foliage Plants', plants: [
  {name:'Monstera Deliciosa',cost:30,image:'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80',description:'Iconic split leaves with tropical character.'},
  {name:'Calathea',cost:24,image:'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80',description:'Patterned foliage with visual interest.'},
  {name:'Bird of Paradise',cost:35,image:'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=700&q=80',description:'Large leaves for a bold statement.'},
  {name:'Chinese Evergreen',cost:21,image:'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80',description:'Beautiful, easy-care foliage.'},
  {name:'Philodendron',cost:20,image:'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80',description:'Versatile plant with lush leaves.'},
  {name:'Fiddle Leaf Fig',cost:32,image:'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80',description:'Large violin-shaped leaves.'}
 ]}
];
function Navbar() {
 const items = useSelector((state) => state.cart.items);
 const cartQuantity = items.reduce((sum,item) => sum + item.quantity, 0);
 return <nav className="shop-navbar" aria-label="Shop navigation"><Link to="/">Home</Link><Link to="/plants">Plants</Link><Link to="/cart" className="cart-link">🛒 Cart <span className="cart-count">{cartQuantity}</span></Link></nav>;
}
export default function ProductList() {
 const dispatch = useDispatch();
 const cartItems = useSelector((state) => state.cart.items);
 const [addedToCart, setAddedToCart] = useState({});
 const handleAddToCart = (plant) => { dispatch(addItem(plant)); setAddedToCart((previous) => ({...previous,[plant.name]:true})); };
 return <main className="page-wrap"><Navbar/><section><h1>Our Houseplants</h1>{plantsArray.map((category) => <section className="product-list" key={category.category}><h2>{category.category}</h2><div className="plant-grid">{category.plants.map((plant) => {const alreadyAdded = addedToCart[plant.name] || cartItems.some((item) => item.name === plant.name);return <article className="plant-card" key={plant.name}><img className="plant-image" src={plant.image} alt={plant.name}/><div className="plant-card-body"><h3>{plant.name}</h3><p>{plant.description}</p><p className="plant-price">${plant.cost.toFixed(2)}</p><button className="primary-button" disabled={addedToCart[plant.name] || cartItems.some((item) => item.name === plant.name)} onClick={() => handleAddToCart(plant)}>{alreadyAdded ? 'Added to Cart' : 'Add to Cart'}</button></div></article>;})}</div></section>)}</section></main>;
}
export { plantsArray };
