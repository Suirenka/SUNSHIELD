import React from "react";
import LocationBox from "../components/LocationBox";

function Home() {
  return (
    <div 
      style={{ 
        minHeight: "100vh", 
        backgroundImage: "url(/2.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div 
        style={{ 
          
          padding: "2rem", 
          borderRadius: "12px", 
          maxWidth: "600px", 
        }}
      >
        <img 
          src="/1.jpeg" 
          alt="Sun 1" 
          style={{ 
            width: "100px", 
            height: "100px", 
            marginBottom: "1rem",
            borderRadius: "50%"
          }} 
        />

        <h3 
          style={{ 
            background: "linear-gradient(90deg, #FF8C00, #FF4500)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent", 
            fontSize: "1.5rem",
            fontWeight: "bold",
            lineHeight: "1.4", 
            display: "inline-block", 
            padding: "0.2rem 0" 
          }}
        >
          ☀ Stay Safe Under the Sun! ☀
        </h3>

        <p style={{ fontSize: "1rem", color: "#444", lineHeight: "1.8", marginBottom: "1.5rem" }}>
          🌞 <strong>UV rays are invisible but powerful!</strong> Long-term exposure can lead to <strong>sunburn, premature aging, and even skin cancer.</strong>
          <br /><br />
          🏖️ <strong>Protect yourself</strong> by checking the UV index before heading out. Wear <strong>sunscreen</strong>, put on <strong>protective clothing</strong>, and <strong>seek shade</strong> when needed.
          <br /><br />
          ☂️ <strong>Be sun-smart, stay safe, and enjoy the outdoors responsibly!</strong>
        </p>

        <h2 style={{ marginBottom: "1rem", fontSize: "1.4rem", fontWeight: "bold", color: "#333" }}>
          Find Your Local UV Index
        </h2>
        <p style={{ marginBottom: "2.5rem", color: "#555" }}>
          Enter your location below to get real-time UV Index data and personalized sun protection tips.
        </p>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center", justifyContent: "center", marginTop: "2rem" }}>
          <LocationBox />
        </div>

        <img 
          src="/3.jpeg" 
          alt="Sun 3" 
          style={{ 
            width: "100px", 
            height: "100px", 
            marginTop: "1rem",
            borderRadius: "50%" 
          }} 
        />
      </div>
    </div>
  );
}

export default Home;
