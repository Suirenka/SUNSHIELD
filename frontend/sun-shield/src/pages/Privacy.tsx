import React from "react";

const Privacy = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>Privacy Policy</h2>
      <p>Last Updated: March 2025</p>

      <h3>1. Introduction</h3>
      <p>
        Welcome to SunShield. Your privacy is important to us. This Privacy Policy outlines
        the types of information we collect, how we use it, and how we protect your data.
      </p>

      <h3>2. Information We Collect</h3>
      <ul>
        <li><strong>Personal Information:</strong> When using our location-based services, we may collect your location data.</li>
        <li><strong>Usage Data:</strong> We collect information on how you interact with our app, such as the UV index searches you perform.</li>
        <li><strong>Device Data:</strong> Information about the device you use to access our services, including browser type and IP address.</li>
      </ul>

      <h3>3. How We Use Your Information</h3>
      <ul>
        <li>To provide accurate UV index data based on your location.</li>
        <li>To send notifications and reminders about UV protection.</li>
        <li>To improve our services and enhance user experience.</li>
      </ul>

      <h3>4. Data Protection</h3>
      <p>
        We take appropriate security measures to protect your data from unauthorized access,
        alteration, or destruction. However, no online service can guarantee 100% security.
      </p>

      <h3>5. Third-Party Services</h3>
      <p>
        We may use third-party APIs (such as weather data providers) to enhance our services.
        These third parties have their own privacy policies, and we recommend reviewing them.
      </p>

      <h3>6. Your Rights</h3>
      <p>
        You have the right to access, update, or delete your personal data. If you have any
        questions or concerns about your privacy, please contact us.
      </p>
    </div>
  );
};

export default Privacy;