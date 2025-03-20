import { Text } from "@fluentui/react-components";

const Privacy = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Text as="h1" weight="semibold" size={600}>
        Privacy Policy
      </Text>
      <Text as="p" size={400}>
        Last Updated: March 2025
      </Text>

      <Text as="h2" weight="semibold" size={500}>
        1. Introduction
      </Text>
      <Text as="p" size={400}>
        Welcome to SunShield. Your privacy is important to us. This Privacy
        Policy outlines the types of information we collect, how we use it, and
        how we protect your data.
      </Text>

      <Text as="h2" weight="semibold" size={500}>
        2. Information We Collect
      </Text>
      <ul style={{ paddingLeft: "20px", margin: 0 }}>
        <li>
          <Text as="p" size={400}>
            <strong>Personal Information:</strong> When using our location-based
            services, we may collect your location data.
          </Text>
        </li>
        <li>
          <Text as="p" size={400}>
            <strong>Usage Data:</strong> We collect information on how you
            interact with our app, such as the UV index searches you perform.
          </Text>
        </li>
        <li>
          <Text as="p" size={400}>
            <strong>Device Data:</strong> Information about the device you use
            to access our services, including browser type and IP address.
          </Text>
        </li>
      </ul>

      <Text as="h2" weight="semibold" size={500}>
        3. How We Use Your Information
      </Text>
      <ul style={{ paddingLeft: "20px", margin: 0 }}>
        <li>
          <Text as="p" size={400}>
            To provide accurate UV index data based on your location.
          </Text>
        </li>
        <li>
          <Text as="p" size={400}>
            To send notifications and reminders about UV protection.
          </Text>
        </li>
        <li>
          <Text as="p" size={400}>
            To improve our services and enhance user experience.
          </Text>
        </li>
      </ul>

      <Text as="h2" weight="semibold" size={500}>
        4. Data Protection
      </Text>
      <Text as="p" size={400}>
        We take appropriate security measures to protect your data from
        unauthorized access, alteration, or destruction. However, no online
        service can guarantee 100% security.
      </Text>

      <Text as="h2" weight="semibold" size={500}>
        5. Third-Party Services
      </Text>
      <Text as="p" size={400}>
        We may use third-party APIs (such as weather data providers) to enhance
        our services. These third parties have their own privacy policies, and
        we recommend reviewing them.
      </Text>

      <Text as="h2" weight="semibold" size={500}>
        6. Your Rights
      </Text>
      <Text as="p" size={400}>
        You have the right to access, update, or delete your personal data. If
        you have any questions or concerns about your privacy, please contact
        us.
      </Text>
    </div>
  );
};

export default Privacy;
