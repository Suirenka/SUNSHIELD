import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
      background: '#3C361F80', padding: '1rem', marginTop: 'auto',
      bottom: "0", width: "100%", height: "50px"
    }}>
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
