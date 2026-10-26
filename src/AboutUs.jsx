import React from 'react';
import { Link } from 'react-router-dom';
export default function AboutUs() {
  return <main className="about-us-container page-wrap"><h1>About Paradise Nursery</h1><p>Paradise Nursery helps people bring the beauty of nature into their homes. We offer carefully selected houseplants for beginners and experienced plant lovers.</p><p>Our goal is to make plant care approachable with attractive plants, helpful descriptions, and a simple shopping experience.</p><Link className="primary-button" to="/plants">Explore Plants</Link></main>;
}
