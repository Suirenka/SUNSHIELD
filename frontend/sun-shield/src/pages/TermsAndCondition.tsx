import React from "react";

function TermsAndCondition() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>Terms and Conditions</h2>
      <p>Last Updated: March 2025</p>

      <h3>1. Introduction</h3>
      <p>
        Welcome to SunShield. By accessing or using our services, you agree to be bound by the following Terms and Conditions.
      </p>

      <h3>2. Use of Services</h3>
      <ul>
        <li>You may use SunShield for personal, non-commercial purposes.</li>
        <li>Misuse, modification, or disruption of the service is strictly prohibited.</li>
        <li>SunShield provides general sun protection advice, but it should not be considered as medical advice.</li>
      </ul>

      <h3>3. Limitation of Liability</h3>
      <p>
        While we strive to provide accurate UV index data and recommendations, SunShield is not responsible for:
      </p>
      <ul>
        <li>Any health-related outcomes resulting from sun exposure.</li>
        <li>Inaccuracies in UV data provided by third-party sources.</li>
        <li>Service interruptions or technical errors.</li>
      </ul>

      <h3>4. Privacy and Data Collection</h3>
      <p>
        Your privacy is important to us. By using our services, you agree to the collection and usage of data as outlined in our 
        <a href="/privacy" style={{ color: "#007bff", textDecoration: "none" }}> Privacy Policy</a>.
      </p>

      <h3>5. Changes to Terms</h3>
      <p>
        We reserve the right to update these Terms and Conditions at any time. Continued use of our services after updates constitutes acceptance of the changes.
      </p>

      <h3>6. Contact Us</h3>
      <p>
        If you have any questions or concerns regarding these terms, please contact us at:
        <br />
        📧 Email: support@sunshield.com
        <br />
        📍 Address: 123 SunShield Avenue, Melbourne, Australia
      </p>
    </div>
  );
}

export default TermsAndCondition;