import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ background: '#eee', padding: '1rem' }}>
      <h1>SunShield</h1>
      <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/uvindex" style={{ marginRight: '1rem' }}>UV Index</Link>
        <Link to="/protection">Protection</Link>
      </nav>
    </header>
  );
}

export default Header;
