import React from 'react';
import LocationBox from '../components/LocationBox';

function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '1rem' }}>Find Your Local UV Index</h2>
      <p style={{ marginBottom: '1.5rem' }}>
        Enter your location below to get the latest UV Index data and personalized
        sun protection tips. Stay informed and stay safe in the sun!
      </p>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <LocationBox />
      </div>
    </div>
  );
}

export default Home;
