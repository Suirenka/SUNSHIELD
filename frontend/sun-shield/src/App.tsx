import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import UVIndex from './pages/UVIndex';
import Protection from './pages/Protection';
import Contact from './pages/Contact';
import TermsAndCondition from './pages/TermsAndCondition';
import Privacy from './pages/Privacy';

function App() {
  return (
    <div>
      <Header />
      <div style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="uvindex" element={<UVIndex />} />
            <Route path="protection" element={<Protection />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms-and-condition" element={<TermsAndCondition />} />
            <Route path="privacy" element={<Privacy />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
