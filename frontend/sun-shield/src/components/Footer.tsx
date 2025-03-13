import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ background: '#eee', padding: '1rem', marginTop: '1rem' }}>
      <nav>
        <Link to="/contact" style={{ marginRight: '1rem' }}>Contact US</Link>
        <Link to="/terms-and-condition" style={{ marginRight: '1rem' }}>Terms and Conditions</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </nav>
      <p>&copy; {new Date().getFullYear()} SUNSHIELD</p>
    </footer>
  );
}

export default Footer;
